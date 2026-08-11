import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

function createTransporter() {
  // Agar variables load na ho rahe hon to yeh terminal me warning dega
  if (!process.env.SMTP_HOST || !process.env.SMTP_USER) {
    console.warn("⚠️ WARNING: SMTP Environment variables are missing or undefined!");
  }

  return nodemailer.createTransport({
    host:   process.env.SMTP_HOST,
    port:   Number(process.env.SMTP_PORT) || 465,
    secure: process.env.SMTP_SECURE === "true", // strict boolean check
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
    tls: {
      rejectUnauthorized: false // Local machine testing ke liye zaroori hai
    }
  });
}

// ─── Email templates ──────────────────────────────────────────────────────────

function contactEmailHtml(data) {
  return `
<!DOCTYPE html><html><body style="font-family:sans-serif;background:#f5f5f5;padding:32px;">
<div style="max-width:600px;margin:0 auto;background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 4px 20px rgba(0,0,0,0.08)">
  <div style="background:linear-gradient(135deg,#1a194d,#625eff);padding:28px 32px;">
    <h1 style="color:#fff;margin:0;font-size:20px;font-weight:800;letter-spacing:-0.5px">New Contact Inquiry</h1>
    <p style="color:rgba(255,255,255,0.65);margin:6px 0 0;font-size:13px">AgenticSense Contact Form</p>
  </div>
  <div style="padding:28px 32px;">
    <table style="width:100%;border-collapse:collapse;">
      <tr><td style="padding:10px 0;border-bottom:1px solid #f0effe;color:#9ca3af;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;width:130px">Name</td><td style="padding:10px 0;border-bottom:1px solid #f0effe;color:#1a194d;font-size:14px;font-weight:600">${data.name}</td></tr>
      <tr><td style="padding:10px 0;border-bottom:1px solid #f0effe;color:#9ca3af;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em">Email</td><td style="padding:10px 0;border-bottom:1px solid #f0effe;color:#1a194d;font-size:14px;font-weight:600"><a href="mailto:${data.email}" style="color:#625eff">${data.email}</a></td></tr>
    </table>
    <div style="margin-top:20px;">
      <p style="color:#9ca3af;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;margin:0 0 8px">Message</p>
      <div style="background:#f8f8fc;border:1px solid #e8e7f8;border-radius:8px;padding:16px;color:#1a194d;font-size:14px;line-height:1.65">${data.message.replace(/\n/g, "<br>")}</div>
    </div>
  </div>
  <div style="background:#f8f8fc;padding:16px 32px;border-top:1px solid #f0effe;font-size:12px;color:#9ca3af">Sent from agenticsense.co/contact</div>
</div></body></html>`;
}

function proposalEmailHtml(data) {
  const rows = [
    ["Name",         data.name],
    ["Email",        data.email],
    ["Phone",        data.phone],
    ["WhatsApp",     data.whatsapp],
    ["Company",      data.company],
    ["Role",         data.identity],
    ["Budget",       data.budget ? `$${Number(data.budget).toLocaleString()}` : ""],
    ["Timeline",     data.timeline],
    ["ERP / Stack",  data.erp],
    ["Country",      data.country],
  ].filter(([, v]) => v);

  return `
<!DOCTYPE html><html><body style="font-family:sans-serif;background:#f5f5f5;padding:32px;">
<div style="max-width:600px;margin:0 auto;background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 4px 20px rgba(0,0,0,0.08)">
  <div style="background:linear-gradient(135deg,#1a194d,#625eff);padding:28px 32px;">
    <h1 style="color:#fff;margin:0;font-size:20px;font-weight:800;letter-spacing:-0.5px">New Proposal Request</h1>
    <p style="color:rgba(255,255,255,0.65);margin:6px 0 0;font-size:13px">AgenticSense Proposal Form</p>
  </div>
  <div style="padding:28px 32px;">
    <table style="width:100%;border-collapse:collapse;">
      ${rows.map(([k, v]) => `<tr><td style="padding:10px 0;border-bottom:1px solid #f0effe;color:#9ca3af;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;width:130px">${k}</td><td style="padding:10px 0;border-bottom:1px solid #f0effe;color:#1a194d;font-size:14px;font-weight:600">${v}</td></tr>`).join("")}
    </table>
    ${data.projectBrief ? `<div style="margin-top:20px;"><p style="color:#9ca3af;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;margin:0 0 8px">Project Brief</p><div style="background:#f8f8fc;border:1px solid #e8e7f8;border-radius:8px;padding:16px;color:#1a194d;font-size:14px;line-height:1.65">${data.projectBrief.replace(/\n/g, "<br>")}</div></div>` : ""}
  </div>
  <div style="background:#f8f8fc;padding:16px 32px;border-top:1px solid #f0effe;font-size:12px;color:#9ca3af">Sent from agenticsense.co/proposal</div>
</div></body></html>`;
}

function careersEmailHtml(data) {
  const rows = [
    ["Name",         data.name],
    ["Email",        data.email],
    ["Phone",        data.phone],
    ["WhatsApp",     data.whatsapp],
    ["Address",      data.address],
    ["LinkedIn",     data.linkedin],
    ["Portfolio",    data.portfolio],
    ["Role Applied", data.role],
    ["Experience",   data.experience],
    ["Company",      data.company],
    ["Notice",       data.notice],
    ["Salary",       data.salary],
    ["Source",       data.source],
    ["Skills",       Array.isArray(data.skills) ? data.skills.join(", ") : data.skills],
  ].filter(([, v]) => v);

  return `
<!DOCTYPE html><html><body style="font-family:sans-serif;background:#f5f5f5;padding:32px;">
<div style="max-width:600px;margin:0 auto;background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 4px 20px rgba(0,0,0,0.08)">
  <div style="background:linear-gradient(135deg,#1a194d,#625eff);padding:28px 32px;">
    <h1 style="color:#fff;margin:0;font-size:20px;font-weight:800;letter-spacing:-0.5px">New Job Application</h1>
    <p style="color:rgba(255,255,255,0.65);margin:6px 0 0;font-size:13px">AgenticSense Careers Form · ${data.role || "General Application"}</p>
  </div>
  <div style="padding:28px 32px;">
    <table style="width:100%;border-collapse:collapse;">
      ${rows.map(([k, v]) => `<tr><td style="padding:10px 0;border-bottom:1px solid #f0effe;color:#9ca3af;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;width:130px">${k}</td><td style="padding:10px 0;border-bottom:1px solid #f0effe;color:#1a194d;font-size:14px;font-weight:600;word-break:break-word">${v}</td></tr>`).join("")}
    </table>
    ${data.motivation ? `<div style="margin-top:20px;"><p style="color:#9ca3af;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;margin:0 0 8px">Why AgenticSense?</p><div style="background:#f8f8fc;border:1px solid #e8e7f8;border-radius:8px;padding:16px;color:#1a194d;font-size:14px;line-height:1.65">${data.motivation.replace(/\n/g, "<br>")}</div></div>` : ""}
    ${data.project ? `<div style="margin-top:16px;"><p style="color:#9ca3af;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;margin:0 0 8px">Relevant Project</p><div style="background:#f8f8fc;border:1px solid #e8e7f8;border-radius:8px;padding:16px;color:#1a194d;font-size:14px;line-height:1.65">${data.project.replace(/\n/g, "<br>")}</div></div>` : ""}
  </div>
  <div style="background:#f8f8fc;padding:16px 32px;border-top:1px solid #f0effe;font-size:12px;color:#9ca3af">
    ${data.cvAttached ? "⚠️ CV was uploaded check form submission storage for the file." : "No CV attached."}
    · Sent from agenticsense.co/careers
  </div>
</div></body></html>`;
}

// ─── Auto-reply templates ─────────────────────────────────────────────────────

function autoReplyHtml(name, type) {
  const msgs = {
    contact: { subject: "We received your message", body: "Thanks for reaching out. We'll review your message and get back to you within 1–2 business days." },
    proposal: { subject: "Your proposal request is in", body: "Thanks for submitting your proposal request. Our team will review the details and get back to you within 1–2 business days with next steps." },
    careers: { subject: "Application received AgenticSense", body: "Thanks for applying to AgenticSense. We read every application personally. If your profile is a strong match for a current opening, we'll be in touch within 5–7 business days." },
  };
  const m = msgs[type];
  return `
<!DOCTYPE html><html><body style="font-family:sans-serif;background:#f5f5f5;padding:32px;">
<div style="max-width:520px;margin:0 auto;background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 4px 20px rgba(0,0,0,0.08)">
  <div style="background:linear-gradient(135deg,#1a194d,#625eff);padding:28px 32px;">
    <h1 style="color:#fff;margin:0;font-size:19px;font-weight:800">${m.subject}</h1>
  </div>
  <div style="padding:28px 32px;">
    <p style="color:#1a194d;font-size:15px;line-height:1.7">Hi ${name},</p>
    <p style="color:#6b7280;font-size:14px;line-height:1.7">${m.body}</p>
    <p style="color:#6b7280;font-size:14px;line-height:1.7;margin-top:16px">In the meantime, feel free to explore our work at <a href="https://agenticsense.co" style="color:#625eff">agenticsense.co</a>.</p>
    <div style="margin-top:24px;padding-top:20px;border-top:1px solid #f0effe;">
      <p style="color:#9ca3af;font-size:13px;margin:0">The AgenticSense Team<br>support@agenticsense.co</p>
    </div>
  </div>
</div></body></html>`;
}

// ─── Route handler ────────────────────────────────────────────────────────────

export async function POST(req) {
  try {
    let body = {};
    let cvAttachment = null;
    const contentType = req.headers.get("content-type") || "";

    if (contentType.includes("multipart/form-data")) {
      const formData = await req.formData();
      for (const [key, value] of formData.entries()) {
        if (key === "cv" && value instanceof Blob && value.size > 0) {
          const buffer = Buffer.from(await value.arrayBuffer());
          cvAttachment = {
            filename: value.name || "cv",
            content:  buffer,
            contentType: value.type,
          };
          body.cvAttached = true;
        } else if (key === "skills") {
          try { body.skills = JSON.parse(value); } catch { body.skills = value; }
        } else {
          body[key] = value;
        }
      }
    } else {
      body = await req.json();
    }

    const { type, ...data } = body;

    if (!["contact", "proposal", "careers"].includes(type)) {
      return NextResponse.json({ error: "Invalid form type" }, { status: 400 });
    }
    if (!data.email || !data.name) {
      return NextResponse.json({ error: "Name and email are required" }, { status: 400 });
    }

    const transporter = createTransporter();

    const htmlBody =
      type === "contact"  ? contactEmailHtml(data) :
      type === "proposal" ? proposalEmailHtml(data) :
                            careersEmailHtml(data);

    const subjectMap = {
      contact:  `New Contact: ${data.name} <${data.email}>`,
      proposal: `New Proposal Request: ${data.name} ${data.company || ""}`,
      careers:  `New Application: ${data.name} ${data.role || "General"}`,
    };

    const mailOptions = {
      from:    process.env.SMTP_FROM,
      to:      process.env.SMTP_TO,
      replyTo: data.email,
      subject: subjectMap[type],
      html:    htmlBody,
      ...(cvAttachment ? { attachments: [cvAttachment] } : {}),
    };

    await transporter.sendMail(mailOptions);

    const autoReplySubjects = {
      contact:  "We received your message AgenticSense",
      proposal: "Your proposal request is in AgenticSense",
      careers:  "Application received AgenticSense",
    };

    await transporter.sendMail({
      from:    process.env.SMTP_FROM,
      to:      data.email,
      subject: autoReplySubjects[type],
      html:    autoReplyHtml(data.name, type),
    });

    return NextResponse.json({ success: true });

  } catch (err) {
    console.error("[send-email]", err);
    return NextResponse.json({ error: "Failed to send email. Please try again." }, { status: 500 });
  }
}