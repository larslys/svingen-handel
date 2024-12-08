// src/app/api/contact/route.ts
import { NextResponse } from 'next/server'
import sgMail from '@sendgrid/mail'

sgMail.setApiKey(process.env.SENDGRID_API_KEY || '')

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, message, type } = body

    // Forbedret plain text versjon
    const plainText = `
Ny henvendelse fra Svingen Handel og Kafe's nettside

Type: ${type === 'order' ? 'Bestilling' : 'Generell henvendelse'}

KONTAKTINFORMASJON
-----------------
Navn: ${name}
E-post: ${email}
${phone ? `Telefon: ${phone}\n` : ''}

MELDING
-------
${message}

--
Denne e-posten ble sendt fra kontaktskjemaet på svingenhandel.no
Hvis du ikke forventer denne e-posten, vennligst se bort fra den.
    `.trim()

    // Forbedret HTML versjon
    const htmlContent = `
<!DOCTYPE html>
<html lang="nb">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ny henvendelse fra nettsiden</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
    <div style="background-color: #FFF7ED; border-radius: 8px; padding: 20px; margin-bottom: 20px;">
        <h1 style="color: #78350F; margin-top: 0; font-size: 24px;">
            Ny ${type === 'order' ? 'bestilling' : 'henvendelse'} fra nettsiden
        </h1>
    </div>

    <div style="background-color: #ffffff; border: 1px solid #FED7AA; border-radius: 8px; padding: 20px; margin-bottom: 20px;">
        <h2 style="color: #78350F; font-size: 18px; margin-top: 0;">Kontaktinformasjon</h2>
        <p style="margin: 0 0 10px;">
            <strong>Navn:</strong> ${name}<br>
            <strong>E-post:</strong> ${email}<br>
            ${phone ? `<strong>Telefon:</strong> ${phone}<br>` : ''}
        </p>
    </div>

    <div style="background-color: #ffffff; border: 1px solid #FED7AA; border-radius: 8px; padding: 20px;">
        <h2 style="color: #78350F; font-size: 18px; margin-top: 0;">Melding</h2>
        <p style="white-space: pre-line;">${message.replace(/\n/g, '<br>')}</p>
    </div>

    <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #FED7AA; font-size: 12px; color: #666;">
        <p>
            Denne e-posten ble sendt fra kontaktskjemaet på svingenhandel.no<br>
            Hvis du ikke forventer denne e-posten, vennligst se bort fra den.
        </p>
    </div>
</body>
</html>
    `.trim()

    const msg = {
      to: process.env.RECIPIENT_EMAIL || '',
      from: {
        email: process.env.SENDER_EMAIL || '',
        name: 'Svingen Handel og Kafe'  // Legger til avsendernavn
      },
      subject: `${type === 'order' ? 'Ny bestilling' : 'Ny henvendelse'} fra ${name}`,
      text: plainText,
      html: htmlContent,
      mail_settings: {
        sandbox_mode: {
          enable: false
        }
      },
      tracking_settings: {
        click_tracking: {
          enable: false  // Deaktiverer click tracking for bedre leveringsevne
        },
        open_tracking: {
          enable: false  // Deaktiverer open tracking for bedre leveringsevne
        }
      }
    }

    await sgMail.send(msg)
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('SendGrid Error:', error)
    return NextResponse.json(
      { error: 'Kunne ikke sende e-post' },
      { status: 500 }
    )
  }
}