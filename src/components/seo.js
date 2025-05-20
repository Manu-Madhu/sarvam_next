import { NextSeo } from 'next-seo';
import { JsonLd } from 'next-seo';

const SEO = ({
  title,
  description,
  keywords,
  canonicalUrl,
  imageUrl,
  product,
  pageType,
}) => {
  const schemaMarkup = () => {
    if (pageType === 'product' && product) {
      const productSchema = {
        '@type': 'Product',
        name: product.name,
        description: product.description,
        image: product.images,
        sku: product.sku,
        mpn: product.mpn,
        brand: {
          '@type': 'Brand',
          name: product.brand,
        },
        offers: {
          '@type': 'Offer',
          url: canonicalUrl,
          priceCurrency: product.priceCurrency || 'USD',
          price: product.price,
          availability: product.availability || 'https://schema.org/InStock',
          itemCondition: 'https://schema.org/NewCondition',
        },
      };

      const breadcrumbSchema = {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: process.env.SITE_URL,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: product.category,
            item: `${process.env.SITE_URL}/category/${product.categorySlug}`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: product.name,
            item: canonicalUrl,
          },
        ],
      };

      return (
        <>
          <JsonLd item={productSchema} />
          <JsonLd item={breadcrumbSchema} />
        </>
      );
    }

    // Default organization schema
    const organizationSchema = {
      '@type': 'Organization',
      name: 'Your Company Name',
      url: process.env.SITE_URL,
      logo: `${process.env.SITE_URL}/logo.png`,
      sameAs: [
        'https://facebook.com/yourpage',
        'https://twitter.com/yourhandle',
        'https://instagram.com/yourprofile',
      ],
    };

    return <JsonLd item={organizationSchema} />;
  };

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={canonicalUrl}
        openGraph={{
          type: pageType === 'product' ? 'product' : 'website',
          url: canonicalUrl,
          title: title,
          description: description,
          images: [
            {
              url: imageUrl || `${process.env.SITE_URL}/default-image.jpg`,
              width: 800,
              height: 600,
              alt: title,
            },
          ],
          ...(pageType === 'product' && product
            ? {
                product: {
                  price: {
                    amount: product.price,
                    currency: product.priceCurrency || 'USD',
                  },
                  originalPrice: product.originalPrice,
                  condition: 'new',
                  availability: product.availability || 'instock',
                },
              }
            : {}),
        }}
        additionalMetaTags={[
          {
            name: 'keywords',
            content: keywords,
          },
        ]}
      />
      {schemaMarkup()}
    </>
  );
};

export default SEO;