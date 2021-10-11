import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
class MovieItem extends Component {
    render() {
        return (
            <div>
                <Card>
  <Card.Header>{this.props.myfilm.Title}</Card.Header>
  <Card.Body>
    <blockquote >
    <img src={this.props.myfilm.Poster}></img>
      <footer >
      {this.props.myfilm.Year}
      </footer>
    </blockquote>
  </Card.Body>
</Card>
               {/* <h4>{this.props.myfilm.Title}</h4>
                <p>{this.props.myfilm.Year}</p>
                <img src={this.props.myfilm.Poster}></img>*/}
            </div>
        );
    }
}
export default MovieItem;