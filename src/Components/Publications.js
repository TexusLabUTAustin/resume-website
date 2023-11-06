import React, { Component } from 'react';

class Publications extends Component {
  render() {
    if (this.props.data && this.props.data.publications) {
      const publications = this.props.data.publications.map((publication, index) => (
        <div key={index} className="publication">
          <h3>{publication.title}</h3>
          <p className="info">{publication.author} <span>&bull;</span><em className="date">{publication.year}</em></p>
          {/* You can add more details from your JSON data as needed */}
        </div>
      ));

      return (
        <section id="publications">
          <div className="row publications">
            <div className="three columns header-col">
              <h1><span>Publications</span></h1>
            </div>

            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">
                  {publications}
                </div>
              </div>
            </div>
          </div>
        </section>
      );
    } else {
      return null; // Return null if there are no publications data
    }
  }
}

export default Publications;