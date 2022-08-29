import React from "react";

const CookiePolicy = () => {
  return (
    <div className='flex justify-center mb-10'>
        <div className='w-[100%] md:w-[70%] lg:w-[70%] p-10'>
            <h1 className="text-3xl font-bold mt-10 text-center">Cookie Policy</h1>
        <div>
          <h1 className="text-xl font-bold mt-10">What is a cookie policy?</h1>
          <p>
            Cookies are small data files that are placed on a user's computer or
            mobile device when they visit a website. They can be used to track
            user behavior, remember user preferences or settings, improve user
            experience, and more. <br />
            Most websites use cookies in some form, such as remembering login
            information, enhancing site performance, or enabling third-party
            features. <br />
            A cookie policy informs your users about what cookies you use, how
            and why you use cookies, and how users can control their cookie
            preferences. Cookie policies are legal documents containing the
            information you must publish under the GDPR, CCPA, ePrivacy
            Directive (also known as the EU cookie law), and other cookie
            regulations. <br />
            Creating a cookie policy is just one step in complying with privacy
            laws. You also need to create a cookie notification message,
            generate a privacy policy, and more.
          </p>
        </div>
        <div>
          <h1 className="text-xl font-bold mt-10">
            Do I need a cookie policy on my website?
          </h1>
          <p>
            If you use cookies and are subject to any laws that regulate cookie
            use (e.g., the EU cookie law, CCPA, GDPR, etc.), you must publish
            information about the cookies you use. This information needs to be
            present in a cookie policy or privacy policy. <br />
            These laws generally apply to any website or app that collects
            information from the residents of that country or state. That means
            you may be required to comply with these cookie regulations
            regardless of your location. <br />
            The ePrivacy Directive and other laws apply to cookies and any type
            of technology that stores and processes user information.
          </p>
        </div>
        <div>
            <h1 className="text-xl font-bold mt-10">What will my cookie policy include?</h1>
          <p>Your cookie policy will include sections on:</p>
          <ul class="list-disc p-10">
            <li>What cookies are</li>
            <li>Why you use cookies</li>
            <li>How your users can control cookies</li>
            <li>
              A detailed list of all the cookies you use sorted by category
            </li>
            <li>Information on any other tracking technologies you use</li>
          </ul>
          <p>
            After you've used our cookie scanner tool and reviewed the
            classifications and details, we will automatically generate the
            cookie policy for you.
          </p>

          <p>
            The policy will include the necessary text for explaining how and
            why you use cookies and will be customized for your website.
          </p>

          <p>
            Your website scan results will be compiled into a list of cookies,
            which will include the cookie category, the purpose of each cookie,
            the provider, and a link to the provider's privacy policy for any
            third-party cookies.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;
