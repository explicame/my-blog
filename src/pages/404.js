import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';

class NotFoundPage extends React.Component {
  render () {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <h1>Não encontrado</h1>
        <p>Página</p>
      </Layout>
    );
  }
}

export default NotFoundPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
