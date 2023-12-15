import Image from "next/image";
import Link from "next/link";
import React from "react";

const FOOTER_LINKS = [
  {
    title: "Learn More",
    links: [
      "About Hilink",
      "Press Releases",
      "Environment",
      "Jobs",
      "Privacy Policy",
      "Contact Us",
    ],
  },
  {
    title: "Our Community",
    links: ["Climbing xixixi", "Hiking hilink", "Hilink kinthill"],
  },
];

const FOOTER_CONTACT_INFO = {
  title: "Contact Us",
  links: [
    { label: "Admin Officer", value: "123-456-7890" },
    { label: "Email Officer", value: "hilink@akinthil.com" },
  ],
};

const SOCIALS = {
  title: "Social",
  links: [
    "/svg/facebook.svg",
    "/svg/instagram.svg",
    "/svg/twitter.svg",
    "/svg/youtube.svg",
    "/svg/wordpress.svg",
  ],
};

const Footer = () => {
  return (
    <footer className="flexCenter mb-24">
      <div className="padding-container max-container flex w-full flex-col ga-14">
        <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">
          <Link href="/">
            <Image
                src="/hilink-logo.svg"
                alt="logotype"
                width={74}
                height={29}
            />
          </Link>

          <div className="flex flex-wrap ga-10 sm:justify-between md:flex-1 mb-6">
            {FOOTER_LINKS.map((columns) => (
                <FooterColumn title={columns.title} key={columns.title}>
                  <ul className="regular-14 flex flex-col ga-4 text-gray-30">
                    {columns.links.map((link) => (
                        <Link href="/" key={link}>
                          {link}
                        </Link>
                    ))}
                  </ul>
                </FooterColumn>
            ))}

            <div className='flex flex-col gap-5'>
              <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                {FOOTER_CONTACT_INFO.links.map((link) => (
                    <Link
                        href='/'
                        key={link.label}
                        className='flex gap-4 md:flex-col lg:flex-row'
                    >
                      <p className='whitespace-nowrap'>
                        {link.label}
                      </p>
                      <p className='medium-14 whitespace-nowrap text-blue-70'>
                        {link.value}
                      </p>
                    </Link>
                ))}
              </FooterColumn>
            </div>

            <div className='flex flex-col gap-5'>
              <FooterColumn title={SOCIALS.title}>
                <ul className='regular-14 flex gap-4 text-gray-30'>
                  {SOCIALS.links.map((link) => (
                      <Link
                          href='/'
                          key={link}
                      >
                        <Image
                            src={link}
                            alt='logo'
                            width={24}
                            height={24}
                        />
                      </Link>
                  ))}
                </ul>
              </FooterColumn>
            </div>
          </div>
        </div>

        <div className='border bg-gray-20' />
        <p className='regular-14 w-full text-center text-gray-30 pt-4'>2023 Hilink | All rights reserved</p>
      </div>
    </footer>
  );
};

type FooterColumnProps = {
  title: string;
  children: React.ReactNode;
};

const FooterColumn = ({ title, children }: FooterColumnProps) => {
  return (
    <div className='flex flex-col gap-5'>
      <h4 className='bold-18 whitespace-nowrap'>{title}</h4>
      {children}
    </div>
  );
};

export default Footer;
