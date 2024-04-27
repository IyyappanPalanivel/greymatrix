import { Button, Checkbox, Label, Modal, TextInput } from 'flowbite-react';
import { useState } from 'react';
import { EMAIL_CONFIG } from '../utils/constants';

function EnquiryModal(props) {

    const [name, setName] = useState('');
    const [mobile, setMobile] = useState('');
    const { showModal, toggleModal } = props;

    const EnquiryTitle = "Don't Miss to Claim Your Free Quotation!";

    function onCloseModal() {
        toggleModal(); // Call the toggleModal function to close the modal
        setEmail('');
    }

    const inputTheme = {
        input: {
            colors: {
                gray: "focus:brand focus:ring-your-color"

            }
        }
    }

    const handleButtonClick = () => {
        const emailBody = EMAIL_CONFIG.ENQUIRY_BODY_TEMPLATE(name, mobile);
        const emailSubject = EMAIL_CONFIG.ENQUIRY_SUBJECT;
        const mailToLink = `mailto:${EMAIL_CONFIG.EMAIL_RECIPIENT}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
        window.location.href = mailToLink;
    }

    return (
        <>
            <Modal show={showModal} size="md" onClose={onCloseModal} popup>
                <Modal.Header />
                <Modal.Body>
                    <div className="space-y-6">
                        <h3 className="text-xl font-medium text-gray-900 dark:text-white">{EnquiryTitle}</h3>
                        {/* Email */}
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="name" value="Your Name" />
                            </div>
                            <TextInput
                                id="name"
                                placeholder="Enter your Name"
                                value={name}
                                onChange={(event) => setName(event.target.value)}
                                required
                            />
                        </div>
                        {/* Mobile number */}
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="mobile" value="Your Mobile Number" />
                            </div>
                            <TextInput
                                id="mobile"
                                placeholder='Enter your mobile number'
                                type="tel" // Use type="tel" for mobile numbers
                                value={mobile}
                                onChange={(event) => setMobile(event.target.value)}
                                required
                            />
                        </div>
                        {/* Submit */}
                        <div className="w-full items-center flex">
                            <button
                                className='bg-brandPrimary text-white text-sm px-4 py-2 transition-all duration-300 rounded-md hover:bg-neutralDGrey'
                                onClick={handleButtonClick}
                            >
                                Get Callback From Us
                            </button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default EnquiryModal;
