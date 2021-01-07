import React from 'react';
import _ from 'lodash';

import {Link, withPrefix, markdownify} from '../utils';

export default class FooterText extends React.Component {
    render() {
        let section = _.get(this.props, 'section', null);
        return (
            <section className="cell widget widget-text">
              {_.get(section, 'image', null) && (
                _.get(section, 'image_url', null) ? (
                <Link className="widget-image" href={withPrefix(_.get(section, 'image_url', null))} title={_.get(section, 'image_alt', null)}><img loading="lazy" src={withPrefix(_.get(section, 'image', null))} alt={_.get(section, 'image_alt', null)} /></Link>
                ) : 
                <p className="widget-image"><img loading="lazy" src={withPrefix(_.get(section, 'image', null))} alt={_.get(section, 'image_alt', null)} /></p>
              )}
              {_.get(section, 'title', null) && (
              <h2 className="widget-title">{_.get(section, 'title', null)}</h2>
              )}
              {markdownify(_.get(section, 'content', null))}
            </section>
        );
    }
}
