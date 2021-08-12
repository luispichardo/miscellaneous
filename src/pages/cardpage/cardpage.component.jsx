import React from "react";
import CardTilt from "../../components/card-tilt/card-tilt.component";
import "./cardpage.styles.scss";

class CardPage extends React.Component {
  constructor() {
    super();

    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    try {
      const getData = async () => {
        const result = await fetch("https://randomuser.me/api");
        const data = await result.json();
        this.setState(() => ({
          users: data.results,
        }));
      };
      getData();
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <div>
        {this.state.users
          ? this.state.users.map(
              ({ login: { uuid }, name, picture: { large } }) => (
                <CardTilt key={uuid} {...name} large={large} />
              )
            )
          : "...loading"}
      </div>
    );
  }
}

export default CardPage;
