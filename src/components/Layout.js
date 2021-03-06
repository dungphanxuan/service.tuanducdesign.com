import React from 'react';
import {Helmet} from 'react-helmet';
import ScriptTag from 'react-script-tag';
import _ from 'lodash';
import {withPrefix} from '../utils';
import Header from './Header';
import Footer from './Footer';

export default class Body extends React.Component {
    render() {
        let title = _.get(this.props, 'page.frontmatter.title', null) + ' | ' + _.get(this.props, 'data.config.title', null);
        let font = _.get(this.props, 'data.config.base_font', null) || 'nunito-sans';
        if (_.get(this.props, 'page.frontmatter.meta_title', null)) {
             title = _.get(this.props, 'page.frontmatter.meta_title', null);
        }
        return (
            <React.Fragment>
                <Helmet>
                    <html lang="vi" itemscope itemtype="http://schema.org/WebSite" />
                    <title>{title}</title>
                    <base href={withPrefix('/')}/>
                    <meta charset="utf-8"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <meta name="theme-color" content="#fe2c55"/>
                    <meta name="google" content="notranslate"/>
                    <meta name="dc.title" content={title}/>
                    <meta name="dc.description" content={_.get(this.props, 'page.frontmatter.meta_description', null)}/>
                    <meta name="dc.relation" content={withPrefix('/')}/>
                    <meta name="dc.source" content={withPrefix('/')}/>
                    <meta name="dc.language" content="vi"/>
                    <meta name="title" content={title}/>
                    <meta itemprop="url" content={withPrefix('/')}/>
                    <meta name="description" content={_.get(this.props, 'page.frontmatter.meta_description', null)}/>
                    <meta property="og:locale" content="vi"/>
                    <meta property="og:type" content="website"/>
                    <meta property="og:site_name" content={title}/>
                    <meta property="og:url" content={withPrefix('/')}/>
                    <meta property="og:title" content={title}/>
                    <meta property="og:description" content={_.get(this.props, 'page.frontmatter.meta_description', null)}/>
                    <meta property="og:image" content={withPrefix(_.get(this.props, 'data.config.header.logo_img', null))}/>
                    <meta property="twitter:card" content="summary_large_image"/>
                    <meta property="twitter:url" content={withPrefix('/')}/>
                    <meta property="twitter:title" content={title}/>
                    <meta property="twitter:description" content={_.get(this.props, 'page.frontmatter.meta_description', null)}/>
                    <meta property="twitter:image" content={withPrefix(_.get(this.props, 'data.config.header.logo_img', null))}/>
                    {_.get(this.props, 'page.frontmatter.canonical_url', null) ? (
                    <link rel="canonical" href={_.get(this.props, 'page.frontmatter.canonical_url', null)} itemprop="url"/>
                    ) : (_.get(this.props, 'data.config.domain', null) && ((() => {
                        let domain = _.trim(_.get(this.props, 'data.config.domain', null), '/');
                        let page_url = withPrefix(_.get(this.props, 'page.__metadata.urlPath', null));
                        return (
                        	<link rel="canonical" href={domain + page_url} itemprop="url"/>
                        );
                    })()))}
                    {_.get(this.props, 'page.frontmatter.no_index', null) && (
                    <meta name="robots" content="noindex,follow" />
                    )}
                    {(font !== 'system-sans') && (
                    <link rel="preconnect" href="https://fonts.gstatic.com"/>
                    )}
                    {_.get(this.props, 'data.config.favicon', null) && (
                    <link rel="manifest" href="/manifest.json" />
                    )}
                    {_.get(this.props, 'data.config.favicon', null) && (
                    <link href={withPrefix(_.get(this.props, 'data.config.favicon', null))} rel="icon" type="image/png" sizes="16x16"/>
                    )}
                    {_.get(this.props, 'data.config.favicon', null) && (
                    <link href={withPrefix(_.get(this.props, 'data.config.favicon', null))} rel="icon" type="image/png" sizes="32x32"/>
                    )}
                    {_.get(this.props, 'data.config.favicon', null) && (
                    <link rel="icon" href={withPrefix(_.get(this.props, 'data.config.favicon', null))}/>
                    )}
                    {_.get(this.props, 'data.config.favicon', null) && (
                    <link rel="apple-touch-icon" href={withPrefix(_.get(this.props, 'data.config.favicon', null))}/>
                    )}
                    <meta name="theme-color" content="#fe2c55"/>
                    <link rel="preconnect" href="https://fonts.gstatic.com"/>
                    <link rel="preconnect" href="https://www.googletagmanager.com"/>
                    <link rel="preconnect" href="https://static.xx.fbcdn.net"/>
                    <link rel="preconnect" href="https://connect.facebook.net"/>
                    <link rel="preconnect" href="https://facebook.com"/>
                    <link rel="preconnect" href="https://www.facebook.com"/>
                    <link rel="preconnect" href="https://ajax.googleapis.com"/>
                    <link rel="dns-prefetch" href="//fonts.gstatic.com"/>
                    <link rel="dns-prefetch" href="//www.googletagmanager.com"/>
                    <link rel="dns-prefetch" href="//static.xx.fbcdn.net"/>
                    <link rel="dns-prefetch" href="//connect.facebook.net"/>
                    <link rel="dns-prefetch" href="//facebook.com"/>
                    <link rel="dns-prefetch" href="//www.facebook.com"/>
                    <link rel="dns-prefetch" href="//ajax.googleapis.com"/>
                    {(font === 'nunito-sans') ? (
                    <link rel="preload" href={withPrefix('js/nunito-sans.js')} as="script"/>
                    ) : ((font === 'fira-sans') && (
                    <link rel="preload" href={withPrefix('js/fira-sans.js')} as="script"/>
                    ))}
                    <link rel="preload" href="https://connect.facebook.net/vi_VN/sdk/xfbml.customerchat.js" as="script" />
                    <link rel="preload" href={withPrefix(_.get(this.props, 'data.config.header.logo_img', null))} as="image"/>
                    <script type="application/ld+json">	
                    {`
                     {
                      "@context": "https://schema.org",	
                      "@type": "Organization",	
                      "name": "Tuan Duc Design",	
                      "url": "https://service.tuanducdesign.com/",	
                      "logo": "https://service.tuanducdesign.com/images/CA0E67E9-AAD0-4D36-82D8-674C7504DFD1.png",	
                      "sameAs": [	
                        "https://www.facebook.com/tuanducdesign/",	
                        "https://twitter.com/tuanducdesign/",	
                        "https://www.instagram.com/mi.profile.56/",	
                        "https://github.com/tuanducdesign/"	
                      ],	
                      "contactPoint": [	
                        {	
                          "@type": "ContactPoint",	
                          "telephone": "+84388842026",	
                          "contactType": "customer service",	
                          "email": "miumiu.official.56@gmail.com",	
                          "contactOption": "TollFree",	
                          "areaServed": "VN",	
                          "availableLanguage": "vi"	
                        }	
                      ]
                    }
                    `}	
                    </script>	
                    <script type="application/ld+json">	
                    {`
                     {
                      "@context": "https://schema.org/",	
                      "@type": "FAQPage",	
                      "mainEntity": [	
                        {	
                          "@type": "Question",	
                          "name": "T??i n??n d??ng VPS CentOS, Ubuntu hay Win Server?",	
                          "acceptedAnswer": {	
                            "@type": "Answer",	
                            "text": "????? s??? d???ng t???t c??c d???ch v??? m?? ch??ng t??i cung c???p. B???n n??n s??? d???ng VPS CentOS, Trong tr?????ng h???p b???n ch???y ASP.net. B???n h??y s??? d???ng VPS Win Server."	
                          }	
                        },	
                        {	
                          "@type": "Question",	
                          "name": "T??i n??n s??? m??y ch??? Web Server n??o cho ph?? h???p v???i trang web c???a t??i?",	
                          "acceptedAnswer": {	
                            "@type": "Answer",	
                            "text": "????? s??? d???ng t???t c??c d???ch v??? m?? ch??ng t??i cung c???p, Ch??ng t??i khuy??n b???n n??n s??? d???ng m??y ch??? Web Server Nginx ????? ????p ???ng m???i nhu c???u, V???i m??y ch??? Web Server Apache n?? ti??u t???n nhi???u t??i nguy??n h??n, N??n ch??ng t??i s??? kh??ng h??? tr??? kh??ch h??ng t???i ??u tr??n m??y ch??? n??y."	
                          }	
                        },	
                        {	
                          "@type": "Question",	
                          "name": "C???u h??nh h??? th???ng tr??n Server bao nhi??u l?? ????? v???i website c???a t??i?",	
                          "acceptedAnswer": {	
                            "@type": "Answer",	
                            "text": "T??y nhu c???u s??? d???ng c???a b???n! Th??ng th?????ng ?????i v???i m???t website tin t???c nhi???u ???nh nh?? m?? ngu???n WordPress, Th?? CPU th?????ng l?? 2 CPU, Ram l?? 4GB v?? ph??n v??ng h??? th???ng l?? 250GB Disk."	
                          }	
                        },	
                        {	
                          "@type": "Question",	
                          "name": "T??i c?? ph???i m???t th??m ti???n ????? duy tr?? d???ch v??? kh??ng?",	
                          "acceptedAnswer": {	
                            "@type": "Answer",	
                            "text": "B???n ch??? c???n ????ng k?? m???t l???n l?? l???n sau kh??ng c???n ph???i ????ng th??m ph?? ????? duy tr?? c??c d???ch v??? b???n ???? mua m?? ch??ng t??i cung c???p n???a."	
                          }	
                        }	
                      ]
                    }
                    `}	
                    </script>
                    <script type="application/ld+json">
                    {`
                    {
                      "@context": "https://schema.org",
                      "@type": "LocalBusiness",
                      "name": "Tuan Duc Design",
                      "image": "https://service.tuanducdesign.com/images/CA0E67E9-AAD0-4D36-82D8-674C7504DFD1.png",
                      "@id": "https://service.tuanducdesign.com/",
                      "url": "https://service.tuanducdesign.com/",
                      "telephone": "+84388842026",
                      "priceRange": "2$-100$",
                      "address": {
                        "@type": "PostalAddress",
                        "streetAddress": "Khu ???? th??? Xa La",
                        "addressLocality": "H?? ????ng, H?? N???i",
                        "postalCode": "100000",
                        "addressCountry": "VN"
                      },
                      "geo": {
                        "@type": "GeoCoordinates",
                        "latitude": 20.9605457,
                        "longitude": 105.7947563
                      },
                      "openingHoursSpecification": {
                        "@type": "OpeningHoursSpecification",
                        "dayOfWeek": [
                          "Monday",
                          "Tuesday",
                          "Wednesday",
                          "Thursday",
                          "Friday",
                          "Saturday",
                          "Sunday"
                        ],
                        "opens": "07:00",
                        "closes": "23:00"
                      }
                    }
                    `}
                    </script>
                    <script type='application/ld+json'>
                    {`
                    {
                      "@context": "https://schema.org/",
                      "@type": "Product",
                      "name": "Tuan Duc Design - Chuy??n cung c???p d???ch v??? VPS v?? Website",
                      "aggregateRating": {
                        "@type": "AggregateRating",
                        "ratingValue" : "4.5",
                        "ratingCount": "15"
                      }
                    }
                    `}
                    </script>
                    <body itemscope="itemscope" itemtype="https://schema.org/WebPage" className={'palette-' + _.get(this.props, 'data.config.palette', null) + ' font-' + _.get(this.props, 'data.config.base_font', null)} />
                </Helmet>
                <div id="page" className="site" itemprop="mainContentOfPage" itemscope="itemscope" itemtype="https://schema.org/WebPageElement">
                  <Header {...this.props} />
                  <main id="content" className="site-content">
                    {this.props.children}
                  </main>
                  <Footer {...this.props} />
                </div>
                {(font === 'nunito-sans') ? (
                <ScriptTag src={withPrefix('js/nunito-sans.js')} async/>
                ) : ((font === 'fira-sans') && (
                <ScriptTag src={withPrefix('js/fira-sans.js')} async/>
                ))}
                <div id="fb-root"></div>
                <div className="fb-customerchat" page_id="121349286117840" theme_color="#fe2c55" logged_in_greeting="Ch??o b???n? Ch??ng t??i c?? th??? gi??p g?? cho b???n?" logged_out_greeting="Ch??o b???n? Ch??ng t??i c?? th??? gi??p g?? cho b???n?"></div>
            </React.Fragment>
        );
    }
}
