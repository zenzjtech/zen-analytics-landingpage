import Script from 'next/script';

interface GA4Props {
  accountId: string;
}

const GA4 = ({ accountId }: GA4Props) => {
  return (
    <>
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${accountId}`}
      />
      <Script id="ga-init">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${accountId}');
        `}
      </Script>
    </>
  );
};

export default GA4;