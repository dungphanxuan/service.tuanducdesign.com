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
                    <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" async/>
                    ) : ((font === 'fira-sans') && (
                    <link href="https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,400;0,600;1,400;1,600&display=swap" rel="stylesheet" async/>
                    ))}
                    {_.get(this.props, 'data.config.favicon', null) && (
                    <link rel="icon" href={withPrefix(_.get(this.props, 'data.config.favicon', null))}/>
                    )}
                    <link rel="preconnect" href="https://cdn.rawgit.com"/>
                    <link rel="preconnect" href="https://www.googletagmanager.com"/>
                    <link rel="preconnect" href="https://static.xx.fbcdn.net"/>
                    <link rel="preconnect" href="https://facebook.net"/>
                    <link rel="preload" href="https://cdn.rawgit.com/daneden/animate.css/v3.1.0/animate.min.css" as="style"/>
                    <link rel="stylesheet" href="https://cdn.rawgit.com/daneden/animate.css/v3.1.0/animate.min.css" async/>
                    <link rel="preload" href="https://cdn.rawgit.com/matthieua/WOW/1.0.1/dist/wow.min.js" as="script"/>
                    <script src="https://cdn.rawgit.com/matthieua/WOW/1.0.1/dist/wow.min.js" async/>
                    <link rel="preload" href="https://www.googletagmanager.com/gtag/js?id=G-2J6CDEW9L3" as="script"/>
                    <script src="https://www.googletagmanager.com/gtag/js?id=G-2J6CDEW9L3" async/>
                    <link rel="preload" href="https://connect.facebook.net/vi_VN/sdk/xfbml.customerchat.js" as="script"/>
                    <script src="https://connect.facebook.net/vi_VN/sdk/xfbml.customerchat.js" async defer/>
                    <link rel="preload" href="https://static.xx.fbcdn.net/rsrc.php/v3/yq/r/IE9JII6Z1Ys.png" as="image"/>
                    <link rel="preload" href="https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/t-wz8gw1xG1.png" as="image"/>
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
                    <body itemscope="itemscope" itemtype="https://schema.org/WebPage" className={'palette-' + _.get(this.props, 'data.config.palette', null) + ' font-' + _.get(this.props, 'data.config.base_font', null)} />
                </Helmet>
                <div id="page" className="site" itemprop="mainContentOfPage" itemscope="itemscope" itemtype="https://schema.org/WebPageElement">
                  <Header {...this.props} />
                  <main id="content" className="site-content">
                    {this.props.children}
                  </main>
                  <Footer {...this.props} />
                  <div id="fb-root"></div>
                  <div className="fb-customerchat" page_id="121349286117840" theme_color="#0072ff" logged_in_greeting="Chào bạn? Bạn đang gặp khó khăn về quản lý VPS và Website? Nhắn tin cho mình nhé" logged_out_greeting="Chào bạn? Bạn đang gặp khó khăn về quản lý VPS và Website? Nhắn tin cho mình nhé"></div>
                </div>
            </React.Fragment>
        );
    }
}
