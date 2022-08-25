import React from 'react';

const PrivacyPolicy = () => {
    return (
        <div className='flex justify-center mb-10'>
            <div className='w-[100%] md:w-[70%] lg:w-[70%] p-10'>
                <h1 className='text-3xl font-bold mt-10 text-center'>Privac Policy</h1>
            
                <div>
                    <h1 className='text-xl font-bold mt-10'>Privacy Policy for Websites / Blogs</h1>
                    <p>
                    Most websites and blogs need privacy policies without even realizing it. Stay on the right side of the law by making a custom privacy policy for your site. You can use our products with various platforms like WordPress, Godaddy, Weebly, and more.
                    </p>
                </div>
        
                <div>
                    <h1 className='font-bold mt-2'>Websites and Blogs often process visitor's personal data, including:</h1>
                    <ul class="list-disc p-5">
                        <li>Newsletter sign-ups</li>
                        <li>Contact us forms</li>
                        <li>Customer service communications</li>
                        <li>Cookies or other tracking technologies used for analytics, performance, and more</li>
                    </ul>
                </div>
                <div>
                    <h1 className='text-xl font-bold mt-10'>Privacy Policy for Mobile Apps</h1>
                    <p>Even if you are not subject to laws like the GDPR and CCPA, some marketplaces — including Google Play and Apple's App Store — require your app to have a privacy policy. Avoid getting your app suspended or removed by reviewing app stores guidelines and publishing a privacy policy.</p>

                    <p>Some third-party services and tools, like Google Analytics and Google Maps, require that you have a privacy policy in order to use the service. Create the perfect app privacy policy in minutes with our free privacy policy generator.</p>
                </div>
                <div>
                    <h1 className='text-xl font-bold mt-10'>Privacy Policy for Third-Party Tools</h1>
                    <p>Even if you donit think you need a privacy policy, some third-party services, like AdSense and Facebook Marketplace, require you to submit a compliant privacy policy. Our free privacy policy generator can help you create a personalized policy to comply with your third-party tool requirements.</p>
                </div>
                <div>
                    <h1 className='text-xl font-bold mt-10'>Privacy Policy for SaaS Apps</h1>
                    <p>Your subscription-based service needs a privacy policy to account for the collection of subscriber details. Email addresses, payment information, and more are considered personal data under privacy laws. Keep your SaaS app in the clear with a free privacy policy.</p>
                </div>
                <div>
                <h1 className='text-xl font-bold mt-10'>Privacy Policy for Facebook Ads and Pages</h1>
                    <p>Facebook requires apps on its platform to publish a privacy policy. You'll need to have a privacy policy link ready before your app can go live. Facebook's Platform Terms lists the requirements you'll need to meet. Your privacy policy will also need to comply with any relevant laws.</p>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;