import React, { useState } from "react"
//import { useGoogleReCaptcha } from "react-google-recaptcha-v3"

const useFormInput = initialValue => {
    const [value, setValue] = useState(initialValue)

    const handleChange = e => {
        setValue(e.target.value)
    }

    return {
        value,
        onChange: handleChange,
    }
}

export default function Form() {
    const email = useFormInput("")
    const message = useFormInput("")
    const name = useFormInput("")

    //const { executeRecaptcha } = useGoogleReCaptcha()
    const [token, setToken] = useState("")
    const [notification, setNotification] = useState("")

    // Value for body-parser
    const emailVal = email.value
    const messageVal = message.value
    const nameVal = name.value
    const subjectVal = "Boxes"

    const handleSubmit = async (e) => {
        e.preventDefault()

        // Check if the captcha was skipped or not
       // if (!executeRecaptcha) {
        //    return
        //}

        // handle empty fields just in case
        if (!email.value) {
            setNotification(`Please don't leave any of the fields empty.`)
        } else if (!message.value) {
            setNotification(`Please don't leave any of the fields empty.`)
        } else if (!name.value) {
            setNotification(`Please don't leave any of the fields empty.`)
        }

        // This is the same as grecaptcha.execute on traditional html script tags
        //const result = await executeRecaptcha("homepage")
        const result = "no Captcha"
        //setToken(result) //--> grab the generated token by the reCAPTCHA
       
        // Prepare the data for the server, specifically body-parser
        const data = JSON.stringify({ name: nameVal, email: emailVal, subject: subjectVal, message: messageVal, captcha: result })


        // POST request to your server
        fetch("/contactmailer", {
            method: "POST",
            headers: {
              Accept: "application/json, text/plain, */*",
              "Content-type": "application/json",
            },
            body: data,
          })
            .then(res => res.json())
            .then(result => {
              setNotification(result.result)
            })
    }

    return (
        <div className="content">
            <form onSubmit={handleSubmit}>
                <div className="row gtr-50">
                    <div className="col-6 col-12-mobile">
                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Name"
                            {...name} required
                        />
                    </div>
                    <div className="col-6 col-12-mobile">
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Email"
                            {...email} required
                        />
                    </div>
                    <div class="col-12">
												<input type="text" name="subject" placeholder="Subject" />
											</div>
                    <div className="col-12">
                        <textarea
                            name="message"
                            id="message"
                            placeholder="Message"
                            rows="4"
                            {...message} required
                        ></textarea>
                    </div>
                </div>
                <div class="col-12"><ul className="buttons">
                    <li>
                        <input type="submit" class="special" value="Send Message" />
                    </li>
                </ul></div>
                

                {notification && <span>{notification}</span>}
            </form>
        </div>
    )
}