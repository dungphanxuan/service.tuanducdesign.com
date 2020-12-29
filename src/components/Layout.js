import React from 'react';
import {Helmet} from 'react-helmet';
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
                <Helmet itemscope itemtype="http://schema.org/WebSite">
                    <html lang="vi" />
                    <title>{title}</title>
                    <meta charset="utf-8"/>
                    <meta name="viewport" content="width=device-width, initialscale=1.0" />
                    <meta name="google" content="notranslate" />
                    <meta name="dc.title" content={title}/>
                    <meta name="dc.description" content={_.get(this.props, 'page.frontmatter.meta_description', null)}/>
                    <meta name="dc.relation" content={withPrefix('/')}/>
                    <meta name="dc.source" content={withPrefix('/')}/>
                    <meta name="title" content={title}/>
                    <meta itemprop="url" content={withPrefix('/')}/>
                    <meta name="description" content={_.get(this.props, 'page.frontmatter.meta_description', null)}/>
                    <meta property="og:type" content="website"/>
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
                    <link rel="preload" href={withPrefix(_.get(this.props, 'data.config.header.logo_img', null))} as="image"/>
                    {_.get(this.props, 'page.frontmatter.no_index', null) && (
                    <meta name="robots" content="noindex,follow" />
                    )}
                    {(font !== 'system-sans') && (
                    <link rel="preconnect" href="https://fonts.gstatic.com"/>
                    )}
                    {(font === 'nunito-sans') ? (
                    <link rel="preload" href="https://fonts.gstatic.com/s/nunitosans/v6/pe0oMImSLYBIv1o4X1M8cce4E9ZKdn4qX5FHyg.woff2" as="font" type="font/woff2" crossorigin>
                    <link rel="preload" href="https://fonts.gstatic.com/s/nunitosans/v6/pe0oMImSLYBIv1o4X1M8cce4E9dKdn4qX5FHyg.woff2" as="font" type="font/woff2" crossorigin>
                    <link rel="preload" href="https://fonts.gstatic.com/s/nunitosans/v6/pe0oMImSLYBIv1o4X1M8cce4E9lKdn4qX5E.woff2" as="font" type="font/woff2" crossorigin>
                    <link rel="preload" href="https://fonts.gstatic.com/s/nunitosans/v6/pe01MImSLYBIv1o4X1M8cce4G2JvY1wIUrt9w6fk2A.woff2" as="font" type="font/woff2" crossorigin>
                    <link rel="preload" href="https://fonts.gstatic.com/s/nunitosans/v6/pe01MImSLYBIv1o4X1M8cce4G2JvY10IUrt9w6fk2A.woff2" as="font" type="font/woff2" crossorigin>
                    <link rel="preload" href="https://fonts.gstatic.com/s/nunitosans/v6/pe01MImSLYBIv1o4X1M8cce4G2JvY1MIUrt9w6c.woff2" as="font" type="font/woff2" crossorigin>
                    <link rel="preload" href="https://fonts.gstatic.com/s/nunitosans/v6/pe0qMImSLYBIv1o4X1M8cceyI9tAcVwob5A.woff2" as="font" type="font/woff2" crossorigin>
                    <link rel="preload" href="https://fonts.gstatic.com/s/nunitosans/v6/pe0qMImSLYBIv1o4X1M8ccezI9tAcVwob5A.woff2" as="font" type="font/woff2" crossorigin>
                    <link rel="preload" href="https://fonts.gstatic.com/s/nunitosans/v6/pe0qMImSLYBIv1o4X1M8cce9I9tAcVwo.woff2" as="font" type="font/woff2" crossorigin>
                    <link rel="preload" href="https://fonts.gstatic.com/s/nunitosans/v6/pe03MImSLYBIv1o4X1M8cc8GBs5iU1ECVZl_86Y.woff2" as="font" type="font/woff2" crossorigin>
                    <link rel="preload" href="https://fonts.gstatic.com/s/nunitosans/v6/pe03MImSLYBIv1o4X1M8cc8GBs5jU1ECVZl_86Y.woff2" as="font" type="font/woff2" crossorigin>
                    <link rel="preload" href="https://fonts.gstatic.com/s/nunitosans/v6/pe03MImSLYBIv1o4X1M8cc8GBs5tU1ECVZl_.woff2" as="font" type="font/woff2" crossorigin>
                    ) : ((font === 'fira-sans') && (
                    <link rel="preload" href="https://fonts.gstatic.com/s/firasans/v10/va9C4kDNxMZdWfMOD5VvkrjEYTLVdlTOr0s.woff2" as="font" type="font/woff2" crossorigin>
                    <link rel="preload" href="https://fonts.gstatic.com/s/firasans/v10/va9C4kDNxMZdWfMOD5VvkrjNYTLVdlTOr0s.woff2" as="font" type="font/woff2" crossorigin>
                    <link rel="preload" href="https://fonts.gstatic.com/s/firasans/v10/va9C4kDNxMZdWfMOD5VvkrjFYTLVdlTOr0s.woff2" as="font" type="font/woff2" crossorigin>
                    <link rel="preload" href="https://fonts.gstatic.com/s/firasans/v10/va9C4kDNxMZdWfMOD5VvkrjKYTLVdlTOr0s.woff2" as="font" type="font/woff2" crossorigin>
                    <link rel="preload" href="https://fonts.gstatic.com/s/firasans/v10/va9C4kDNxMZdWfMOD5VvkrjGYTLVdlTOr0s.woff2" as="font" type="font/woff2" crossorigin>
                    <link rel="preload" href="https://fonts.gstatic.com/s/firasans/v10/va9C4kDNxMZdWfMOD5VvkrjHYTLVdlTOr0s.woff2" as="font" type="font/woff2" crossorigin>
                    <link rel="preload" href="https://fonts.gstatic.com/s/firasans/v10/va9C4kDNxMZdWfMOD5VvkrjJYTLVdlTO.woff2" as="font" type="font/woff2" crossorigin>
                    <link rel="preload" href="https://fonts.gstatic.com/s/firasans/v10/va9f4kDNxMZdWfMOD5VvkrAWRSf1VFnklULWJXg.woff2" as="font" type="font/woff2" crossorigin>
                    <link rel="preload" href="https://fonts.gstatic.com/s/firasans/v10/va9f4kDNxMZdWfMOD5VvkrAWRSf8VFnklULWJXg.woff2" as="font" type="font/woff2" crossorigin>
                    <link rel="preload" href="https://fonts.gstatic.com/s/firasans/v10/va9f4kDNxMZdWfMOD5VvkrAWRSf0VFnklULWJXg.woff2" as="font" type="font/woff2" crossorigin>
                    <link rel="preload" href="https://fonts.gstatic.com/s/firasans/v10/va9f4kDNxMZdWfMOD5VvkrAWRSf7VFnklULWJXg.woff2" as="font" type="font/woff2" crossorigin>
                    <link rel="preload" href="https://fonts.gstatic.com/s/firasans/v10/va9f4kDNxMZdWfMOD5VvkrAWRSf3VFnklULWJXg.woff2" as="font" type="font/woff2" crossorigin>
                    <link rel="preload" href="https://fonts.gstatic.com/s/firasans/v10/va9f4kDNxMZdWfMOD5VvkrAWRSf2VFnklULWJXg.woff2" as="font" type="font/woff2" crossorigin>
                    <link rel="preload" href="https://fonts.gstatic.com/s/firasans/v10/va9f4kDNxMZdWfMOD5VvkrAWRSf4VFnklULW.woff2" as="font" type="font/woff2" crossorigin>
                    <link rel="preload" href="https://fonts.gstatic.com/s/firasans/v10/va9E4kDNxMZdWfMOD5VvmojLazX3dGTP.woff2" as="font" type="font/woff2" crossorigin>
                    <link rel="preload" href="https://fonts.gstatic.com/s/firasans/v10/va9E4kDNxMZdWfMOD5Vvk4jLazX3dGTP.woff2" as="font" type="font/woff2" crossorigin>
                    <link rel="preload" href="https://fonts.gstatic.com/s/firasans/v10/va9E4kDNxMZdWfMOD5Vvm4jLazX3dGTP.woff2" as="font" type="font/woff2" crossorigin>
                    <link rel="preload" href="https://fonts.gstatic.com/s/firasans/v10/va9E4kDNxMZdWfMOD5VvlIjLazX3dGTP.woff2" as="font" type="font/woff2" crossorigin>
                    <link rel="preload" href="https://fonts.gstatic.com/s/firasans/v10/va9E4kDNxMZdWfMOD5VvmIjLazX3dGTP.woff2" as="font" type="font/woff2" crossorigin>
                    <link rel="preload" href="https://fonts.gstatic.com/s/firasans/v10/va9E4kDNxMZdWfMOD5VvmYjLazX3dGTP.woff2" as="font" type="font/woff2" crossorigin>
                    <link rel="preload" href="https://fonts.gstatic.com/s/firasans/v10/va9E4kDNxMZdWfMOD5Vvl4jLazX3dA.woff2" as="font" type="font/woff2" crossorigin/>
                    <link rel="preload" href="https://fonts.gstatic.com/s/firasans/v10/va9B4kDNxMZdWfMOD5VnSKzeSxf6Xl7Gl3LX.woff2" as="font" type="font/woff2" crossorigin>
                    <link rel="preload" href="https://fonts.gstatic.com/s/firasans/v10/va9B4kDNxMZdWfMOD5VnSKzeQhf6Xl7Gl3LX.woff2" as="font" type="font/woff2" crossorigin>
                    <link rel="preload" href="https://fonts.gstatic.com/s/firasans/v10/va9B4kDNxMZdWfMOD5VnSKzeShf6Xl7Gl3LX.woff2" as="font" type="font/woff2" crossorigin>
                    <link rel="preload" href="https://fonts.gstatic.com/s/firasans/v10/va9B4kDNxMZdWfMOD5VnSKzeRRf6Xl7Gl3LX.woff2" as="font" type="font/woff2" crossorigin>
                    <link rel="preload" href="https://fonts.gstatic.com/s/firasans/v10/va9B4kDNxMZdWfMOD5VnSKzeSRf6Xl7Gl3LX.woff2" as="font" type="font/woff2" crossorigin>
                    <link rel="preload" href="https://fonts.gstatic.com/s/firasans/v10/va9B4kDNxMZdWfMOD5VnSKzeSBf6Xl7Gl3LX.woff2" as="font" type="font/woff2" crossorigin>
                    <link rel="preload" href="https://fonts.gstatic.com/s/firasans/v10/va9B4kDNxMZdWfMOD5VnSKzeRhf6Xl7Glw.woff2" as="font" type="font/woff2" crossorigin>
                    ))}
                    {_.get(this.props, 'data.config.favicon', null) && (
                    <link rel="icon" href={withPrefix(_.get(this.props, 'data.config.favicon', null))}/>
                    )}
                    <link rel="preconnect" href="https://www.googletagmanager.com"/>
                    <link rel="preconnect" href="https://static.xx.fbcdn.net"/>
                    <link rel="preconnect" href="https://connect.facebook.net"/>
                    <link rel="dns-prefetch" href="//www.googletagmanager.com"/>
                    <link rel="dns-prefetch" href="//static.xx.fbcdn.net"/>
                    <link rel="dns-prefetch" href="//connect.facebook.net"/>
                    <link rel="preload" href="https://www.googletagmanager.com/gtag/js?id=G-2J6CDEW9L3" as="script"/>
                    <link rel="preload" href="https://connect.facebook.net/vi_VN/sdk/xfbml.customerchat.js" as="script"/>
                    <script type="application/ld+json">	
                    {`	
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
                    `}	
                    </script>	
                    <script type="application/ld+json">	
                    {`	
                      "@context": "https://schema.org/",	
                      "@type": "FAQPage",	
                      "mainEntity": [	
                        {	
                          "@type": "Question",	
                          "name": "Tôi nên dùng VPS CentOS, Ubuntu hay Win Server?",	
                          "acceptedAnswer": {	
                            "@type": "Answer",	
                            "text": "Để sử dụng tốt các dịch vụ mà chúng tôi cung cấp. Bạn nên sử dụng VPS CentOS, Trong trường hợp bạn chạy ASP.net. Bạn hãy sử dụng VPS Win Server."	
                          }	
                        },	
                        {	
                          "@type": "Question",	
                          "name": "Tôi nên sử máy chủ Web Server nào cho phù hợp với trang web của tôi?",	
                          "acceptedAnswer": {	
                            "@type": "Answer",	
                            "text": "Để sử dụng tốt các dịch vụ mà chúng tôi cung cấp, Chúng tôi khuyên bạn nên sử dụng máy chủ Web Server Nginx để đáp ứng mọi nhu cầu, Với máy chủ Web Server Apache nó tiêu tốn nhiều tài nguyên hơn, Nên chúng tôi sẽ không hỗ trợ khách hàng tối ưu trên máy chủ này."	
                          }	
                        },	
                        {	
                          "@type": "Question",	
                          "name": "Cấu hình hệ thống trên Server bao nhiêu là đủ với website của tôi?",	
                          "acceptedAnswer": {	
                            "@type": "Answer",	
                            "text": "Tùy nhu cầu sử dụng của bạn! Thông thường đối với một website tin tức nhiều ảnh như mã nguồn WordPress, Thì CPU thường là 2 CPU, Ram là 4GB và phân vùng hệ thống là 250GB Disk."	
                          }	
                        },	
                        {	
                          "@type": "Question",	
                          "name": "Tôi có phải mất thêm tiền để duy trì dịch vụ không?",	
                          "acceptedAnswer": {	
                            "@type": "Answer",	
                            "text": "Bạn chỉ cần đăng ký một lần là lần sau không cần phải đóng thêm phí để duy trì các dịch vụ bạn đã mua mà chúng tôi cung cấp nữa."	
                          }	
                        }	
                      ]	
                    `}	
                    </script>
                    <script type="application/ld+json">
                    {`
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
                        "streetAddress": "Khu đô thị Xa La",
                        "addressLocality": "Hà Đông, Hà Nội",
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
                  <div id="fb-root"></div>
                  <div className="fb-customerchat" data-lazy="true" page_id="121349286117840" theme_color="#0072ff" logged_in_greeting="Chào bạn? Bạn đang gặp khó khăn về quản lý VPS và Website? Nhắn tin cho mình nhé" logged_out_greeting="Chào bạn? Bạn đang gặp khó khăn về quản lý VPS và Website? Nhắn tin cho mình nhé"></div>
                </div>
                {(font === 'nunito-sans') ? (
                <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" async/>
                ) : ((font === 'fira-sans') && (
                <link href="https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,400;0,600;1,400;1,600&display=swap" rel="stylesheet" async/>
                ))}
                <script src="https://www.googletagmanager.com/gtag/js?id=G-2J6CDEW9L3" async></script>
                <script src="https://connect.facebook.net/vi_VN/sdk/xfbml.customerchat.js" async></script>
            </React.Fragment>
        );
    }
}
