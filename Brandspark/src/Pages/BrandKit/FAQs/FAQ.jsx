import React, { useState } from 'react'; // useState: Track which FAQ item is active
import './FAQ.css';

const FAQ = () => { // Defines a functional component named FAQ
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => { // toggleFAQ: Handles the logic for expanding or collapsing an FAQ item.
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: 'How do I create a business card with BrandSpark?',
      answer: 'It’s simple! After you enter your company name in the search placeholder, choose a business card design that you like. Once you’ve selected a design, you can customize it according to your brand’s color scheme, font, and other elements.',
    },
    {
      question: 'How long does it take to generate a business card with BrandSpark?',
      answer: 'It usually takes us around 10 seconds to generate a business card design. If you update your company name, brand preferences, or contact information, the designs will automatically regenerate to reflect these changes.',
    },
    {
      question: 'What can I customize in the Brand Kit editor?',
      answer: 'You can customize the colors, fonts, and layout of your brand assets in the Brand Kit editor to match your brand’s style and preferences.',
    },
    {
        question:'Can I import my own company logo or other images?',
        answer:'Absolutely! You can upload your own company logo or other images, or choose from our extensive library of stock images.'
    },
    {
        question:'Why do I need a subscription for BrandSpark?',
        answer:'Your subscription to BrandSpark provides you with ongoing access to your personalized business card designs, which includes a variety of templates tailored to your brand— and new designs are being added regularly.'
    }
  ];

  return ( // Specifies the JSX that the component will render.
    <div className="faq-container">
      <h1 className="faq-title">BrandSpark Brand Kit FAQs</h1>
      {faqs.map((faq, index) => ( // .map(array_sobject, index): an array method that loops through each item in the array
        <div key={index} className="faq-item">
          <div
            className={`faq-question ${activeIndex === index ? 'active' : ''}`} // Dynamic Class Assignment (Static: faq-question/ Dynamic: active)
            onClick={() => toggleFAQ(index)}
          >
            {faq.question}
            <span className="faq-toggle">{activeIndex === index ? '-' : '+'}</span>
          </div>
          <div className={`faq-answer ${activeIndex === index ? 'active' : ''}`}>
            {faq.answer}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ; //  Makes the FAQ component available for use in other files.
