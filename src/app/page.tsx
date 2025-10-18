"use client";
import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import TextAbout from '@/components/sections/about/TextAbout';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';

const assetMap = [
  {"id":"hero","url":"https://images.pexels.com/photos/1001965/pexels-photo-1001965.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A luxurious hotel lobby featuring elegant architecture, rich decor, and comfortable seating under a stained glass ceiling."},
  {"id":"about","url":"https://images.pexels.com/photos/8484840/pexels-photo-8484840.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Experience serene luxury at a Dubai resort with traditional architecture and tranquil pool."},
  {"id":"rooms","url":"https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Stylish modern restaurant interior with warm lighting, elegant design, and luxurious ambiance at night."},
  {"id":"testimonial-1","url":"https://images.pexels.com/photos/4428046/pexels-photo-4428046.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Confident businesswoman in formal attire standing in a modern café with colleagues working in the background."},
  {"id":"testimonial-2","url":"https://images.pexels.com/photos/7845147/pexels-photo-7845147.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Middle-aged man in business attire sitting at an office desk with a blurred background."},
  {"id":"testimonial-3","url":"https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Confident businesswoman using her tablet and phone, smiling outdoors in sunlight."},
  {"id":"testimonial-4","url":"https://images.pexels.com/photos/5716037/pexels-photo-5716037.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Colleagues celebrate success with a fist bump over financial charts depicting teamwork and unity."},
  {"id":"logo-hilton","url":"https://images.pexels.com/photos/11432738/pexels-photo-11432738.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Modern hotel building exterior in Stuttgart, Germany, during daytime. Urban architecture and design."},
  {"id":"logo-marriott","url":"https://images.pexels.com/photos/34290260/pexels-photo-34290260.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Marriott logo - Photo by Tom Fisk"},
  {"id":"logo-hyatt","url":"https://images.pexels.com/photos/34290260/pexels-photo-34290260.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Hyatt logo - Photo by Tom Fisk"},
  {"id":"logo-sheraton","url":"https://images.pexels.com/photos/34290260/pexels-photo-34290260.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Sheraton logo - Photo by Tom Fisk"},
  {"id":"logo-ritz","url":"https://images.pexels.com/photos/12720659/pexels-photo-12720659.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Stunning overwater villa showcasing modern architecture and luxury on a tropical island."},
  {"id":"logo-fourseasons","url":"https://images.pexels.com/photos/691067/pexels-photo-691067.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Four varied autumn leaves arranged on weathered wooden planks showcasing seasonal change."},
  {"id":"logo-intercontinental","url":"https://images.pexels.com/photos/34290260/pexels-photo-34290260.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Intercontinental logo - Photo by Tom Fisk"}
];

export default function Page() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="background-highlight"
      borderRadius="soft"
    >
      <div id="nav" data-section="nav" className="scroll-mt-24">
        <NavbarStyleApple
          navItems={[
            { name: "Home", id: "home" },
            { name: "About", id: "about" },
            { name: "Rooms", id: "rooms" },
            { name: "Gallery", id: "gallery" },
            { name: "Contact", id: "contact" },
          ]}
          brandName="OceanView Hotel"
        />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <HeroSplit
            title="Experience Luxury and Comfort"
            description="Discover our world-class accommodations and superior service in the heart of the city."
            imageSrc={assetMap.find(a => a.id === "hero")?.url ?? "/public/images/placeholder.webp"}
            buttons={[
              { text: "Explore Rooms", href: "rooms" },
              { text: "Contact Us", href: "contact" },
            ]}
            imagePosition="right"
          />
        </div>
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <TextAbout
            title="Welcome to OceanView Hotel, where elegance meets comfort."
            buttons={[
              { text: "Learn More", href: "about" },
            ]}
            ariaLabel="About section"
          />
        </div>
      </div>
      <div id="testimonial" data-section="testimonial" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <TestimonialCardOne
            title="Guest Testimonials"
            description="Hear from our satisfied guests"
            testimonials={[
              { id: "1", name: "Sarah Johnson", role: "CEO", company: "TechCorp", rating: 5, imageSrc: assetMap.find(a => a.id === "testimonial-1")?.url ?? "/public/images/placeholder.webp" },
              { id: "2", name: "Michael Chen", role: "CTO", company: "InnovateLab", rating: 5, imageSrc: assetMap.find(a => a.id === "testimonial-2")?.url ?? "/public/images/placeholder.webp" },
              { id: "3", name: "Emily Rodriguez", role: "Marketing Director", company: "GrowthCo", rating: 5, imageSrc: assetMap.find(a => a.id === "testimonial-3")?.url ?? "/public/images/placeholder.webp" },
              { id: "4", name: "David Kim", role: "Product Manager", company: "StartupXYZ", rating: 5, imageSrc: assetMap.find(a => a.id === "testimonial-4")?.url ?? "/public/images/placeholder.webp" },
            ]}
          />
        </div>
      </div>
      <div id="socialProof" data-section="socialProof" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <SocialProofOne
            title="Trusted by the Best"
            description="Proudly associated with leading hotels"
            logos={[
              assetMap.find(a => a.id === "logo-hilton")?.url ?? "/public/images/placeholder.webp",
              assetMap.find(a => a.id === "logo-marriott")?.url ?? "/public/images/placeholder.webp",
              assetMap.find(a => a.id === "logo-hyatt")?.url ?? "/public/images/placeholder.webp",
              assetMap.find(a => a.id === "logo-sheraton")?.url ?? "/public/images/placeholder.webp",
              assetMap.find(a => a.id === "logo-ritz")?.url ?? "/public/images/placeholder.webp",
              assetMap.find(a => a.id === "logo-fourseasons")?.url ?? "/public/images/placeholder.webp",
              assetMap.find(a => a.id === "logo-intercontinental")?.url ?? "/public/images/placeholder.webp",
            ]}
          />
        </div>
      </div>
      <div id="contact" data-section="contact" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <ContactCenter
            tag="Newsletter"
            title="Get in Touch"
            description="Subscribe to our newsletter for exclusive offers and the latest news."
            inputPlaceholder="Your email address"
            buttonText="Subscribe"
            termsText="We respect your privacy. Unsubscribe at any time."
          />
        </div>
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <FooterLogoEmphasis
            columns={[
              { items: [{ label: "Features", href: "features" }, { label: "Pricing", href: "pricing" }] },
              { items: [{ label: "About", href: "about" }, { label: "Contact", href: "contact" }] },
            ]}
            logoText="OceanView Hotel"
          />
        </div>
      </div>
    </ThemeProvider>
  );
}
