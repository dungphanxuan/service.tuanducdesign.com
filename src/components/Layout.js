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
                <Helmet>
                    <title>{title}</title>
                    <meta charset="utf-8"/>
                    <meta name="viewport" content="width=device-width, initialscale=1.0" />
                    <meta name="google" content="notranslate" />
                    <meta name="dc.title" content={title}/>
                    <meta name="dc.description" content={_.get(this.props, 'page.frontmatter.meta_description', null)}/>
                    <meta name="dc.relation" content={withPrefix('/')}/>
                    <meta name="dc.source" content={withPrefix('/')}/>
                    <meta name="title" content={title}/>
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
                    <script src="https://cdn.jsdelivr.net/npm/@shinsenter/defer.js@1.1.12/dist/defer_plus.min.js"></script>
                    <script>deferscript('https://cdn.jsdelivr.net/npm/@shinsenter/defer.js@1.1.12/dist/polyfill.min.js', 'polyfill-js', 1)</script>
                    <script type="text/javascript">deferimg("img.fade",100,"lazied",function(a){a.onload=function(){a.className+=" show"}});</script>
                    {_.get(this.props, 'page.frontmatter.no_index', null) && (
                    <meta name="robots" content="noindex,follow" />
                    )}
                    {(font === 'nunito-sans') ? (
                    <script type="text/javascript">deferstyle('https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap', 'nunito-sans', 1);</script>
                    ) : ((font === 'fira-sans') && (
                    <script type="text/javascript">deferstyle('https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,400;0,600;1,400;1,600&display=swap', 'fira-sans', 1);</script>
                    ))}
                    {_.get(this.props, 'data.config.favicon', null) && (
                    <link rel="icon" href={withPrefix(_.get(this.props, 'data.config.favicon', null))}/>
                    )}
                    <script type="text/javascript">deferstyle('https://cdn.rawgit.com/daneden/animate.css/v3.1.0/animate.min.css', 'animate-min', 3);</script>
                    <script type="deferjs">
                    new WOW().init();
                    window.fbAsyncInit = function() {
                      FB.init({
                        xfbml            : true,
                        version          : 'v9.0'
                      });
                    };
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-2J6CDEW9L3');
                    deferscript('https://cdn.rawgit.com/matthieua/WOW/1.0.1/dist/wow.min.js', 'wow-min', 3);
                    deferscript('https://connect.facebook.net/vi_VN/sdk/xfbml.customerchat.js', 'customerchat', 5);
                    deferscript('https://www.googletagmanager.com/gtag/js?id=G-2J6CDEW9L3', 'gtag', 5);    
                    </script>
                    <body itemscope="itemscope" itemtype="https://schema.org/WebPage" className={'palette-' + _.get(this.props, 'data.config.palette', null) + ' font-' + _.get(this.props, 'data.config.base_font', null)} />
                </Helmet>
                <div id="page" className="site" itemprop="mainContentOfPage" itemscope="itemscope" itemtype="https://schema.org/WebPageElement">
                  <div id="fb-root"></div>
                  <Header {...this.props} />
                  <main id="content" className="site-content">
                    {this.props.children}
                  </main>
                  <Footer {...this.props} />
                </div>
                <div class="fb-customerchat" attribution=setup_tool page_id="121349286117840" theme_color="#0072ff" logged_in_greeting="Chào bạn? Bạn đang gặp khó khăn về quản lý VPS và Website? Nhắn tin cho mình nhé" logged_out_greeting="Chào bạn? Bạn đang gặp khó khăn về quản lý VPS và Website? Nhắn tin cho mình nhé"></div>
            </React.Fragment>
        );
    }
}
