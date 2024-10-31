function emailWelcomeMessage(subscriberMessage: string, subscriberEmail: string): string {
return `Subject: Welcome to Our Community, [Subscriber's Name]!

Hi ${subscriberEmail},

Thank you for joining us! We’re thrilled to welcome you to our community of driven entrepreneurs and visionaries. It’s exciting to hear about your project:

    ${subscriberMessage}

We're here to support you at every step as you build and grow your business. Whether you're looking for tools to streamline your online presence or insights to enhance your digital strategy, you’re in the right place.

Here’s what you can look forward to as a subscriber:

    Tailored Resources: Access to exclusive articles, tutorials, and tools to help you achieve your goals.
    Community Connection: Opportunities to share ideas, collaborate, and connect with other like-minded individuals.
    Early Access and Updates: Be the first to know about new features, tools, and events.

If you have any questions or if there's anything specific you'd like assistance with, feel free to reach out. We’re here to help you succeed.

Once again, welcome aboard! We’re excited to be part of your journey.

Best Regards,
https://www.stoicsoftwares.net/`
}

export default emailWelcomeMessage;