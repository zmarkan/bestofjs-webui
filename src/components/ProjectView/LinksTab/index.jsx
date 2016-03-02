import React, { PropTypes } from 'react';

import Tabs from '../Tabs';

const Links = React.createClass({
  propTypes: {
    project: PropTypes.object
  },
  render() {
    const { project, link, auth, authActions, children } = this.props;
    return (
      <div>
        <Tabs project={project} activePath="links" />
        <div className="project-tabs-content">
          <div className="inner">
            { children && project && React.cloneElement(children, {
              project,
              link,
              auth,
              authActions
            }) }
          </div>
        </div>
      </div>
    );
  }
});
export default Links ;
