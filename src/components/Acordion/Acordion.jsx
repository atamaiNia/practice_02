import { Component } from 'react';
// import './Acordion.css';

export class Acordion extends Component {
  state = {
    isShow: false,
    id: '',
  };

  handleClickTitle = event => {
    const { id } = this.state;
    const str = event.target.textContent.split(' ')[0];
    const isExist = id.includes(str);

    const newId = isExist ? id.replace(str, '') : id + ' ' + str;
    this.setState({
      id: newId,
    });
  };

  render() {
    const { isShow, id } = this.state;
    const { handleClickTitle } = this;

    return (
      <div className="container">
        <div className="accordion">
          <h1>FAQ</h1>
          <button
            type="button"
            className="btn"
            id="expand-all"
            onClick={() => {
              this.setState({ isShow: true });
            }}
          >
            Expand All
          </button>
          <button
            type="button"
            className="btn"
            id="collapse-all"
            onClick={() => {
              this.setState({ isShow: false, id: '' });
            }}
          >
            Collapse All
          </button>
          <div className="accordion-item">
            <p className="title" onClick={handleClickTitle}>
              First Question
            </p>
            {(id.includes('First') || isShow) && (
              <div className="content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  eu interdum diam. Donec interdum porttitor risus non bibendum.
                  Maecenas sollicitudin eros in quam imperdiet placerat. Cras
                  justo purus, rhoncus nec lobortis ut, iaculis vel ipsum. Donec
                  dignissim arcu nec elit faucibus condimentum. Donec facilisis
                  consectetur enim sit amet varius. Pellentesque justo dui,
                  sodales quis luctus a, iaculis eget mauris. Aliquam dapibus,
                  ante quis fringilla feugiat, mauris risus condimentum massa,
                  at elementum libero quam ac ligula. Pellentesque at rhoncus
                  dolor. Duis porttitor nibh ut lobortis aliquam. Nullam eu
                  dolor venenatis mauris placerat tristique eget id dolor.
                  Quisque blandit adipiscing erat vitae dapibus. Nulla aliquam
                  magna nec elementum tincidunt.
                </p>
              </div>
            )}
          </div>
          <div className="accordion-item">
            <p className="title" onClick={handleClickTitle}>
              Second Question
            </p>
            {(id.includes('Second') || isShow) && (
              <div className="content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  eu interdum diam. Donec interdum porttitor risus non bibendum.
                  Maecenas sollicitudin eros in quam imperdiet placerat. Cras
                  justo purus, rhoncus nec lobortis ut, iaculis vel ipsum. Donec
                  dignissim arcu nec elit faucibus condimentum. Donec facilisis
                  consectetur enim sit amet varius. Pellentesque justo dui,
                  sodales quis luctus a, iaculis eget mauris. Aliquam dapibus,
                  ante quis fringilla feugiat, mauris risus condimentum massa,
                  at elementum libero quam ac ligula. Pellentesque at rhoncus
                  dolor. Duis porttitor nibh ut lobortis aliquam. Nullam eu
                  dolor venenatis mauris placerat tristique eget id dolor.
                  Quisque blandit adipiscing erat vitae dapibus. Nulla aliquam
                  magna nec elementum tincidunt.
                </p>
              </div>
            )}
          </div>
          <div className="accordion-item">
            <p className="title" onClick={handleClickTitle}>
              Third Question
            </p>
            {(id.includes('Third') || isShow) && (
              <div className="content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  eu interdum diam. Donec interdum porttitor risus non bibendum.
                  Maecenas sollicitudin eros in quam imperdiet placerat. Cras
                  justo purus, rhoncus nec lobortis ut, iaculis vel ipsum. Donec
                  dignissim arcu nec elit faucibus condimentum. Donec facilisis
                  consectetur enim sit amet varius. Pellentesque justo dui,
                  sodales quis luctus a, iaculis eget mauris. Aliquam dapibus,
                  ante quis fringilla feugiat, mauris risus condimentum massa,
                  at elementum libero quam ac ligula. Pellentesque at rhoncus
                  dolor. Duis porttitor nibh ut lobortis aliquam. Nullam eu
                  dolor venenatis mauris placerat tristique eget id dolor.
                  Quisque blandit adipiscing erat vitae dapibus. Nulla aliquam
                  magna nec elementum tincidunt.
                </p>
              </div>
            )}
          </div>
          <div className="accordion-item">
            <p className="title" onClick={handleClickTitle}>
              Fourth Question
            </p>
            {(id.includes('Fourth') || isShow) && (
              <div className="content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  eu interdum diam. Donec interdum porttitor risus non bibendum.
                  Maecenas sollicitudin eros in quam imperdiet placerat. Cras
                  justo purus, rhoncus nec lobortis ut, iaculis vel ipsum. Donec
                  dignissim arcu nec elit faucibus condimentum. Donec facilisis
                  consectetur enim sit amet varius. Pellentesque justo dui,
                  sodales quis luctus a, iaculis eget mauris. Aliquam dapibus,
                  ante quis fringilla feugiat, mauris risus condimentum massa,
                  at elementum libero quam ac ligula. Pellentesque at rhoncus
                  dolor. Duis porttitor nibh ut lobortis aliquam. Nullam eu
                  dolor venenatis mauris placerat tristique eget id dolor.
                  Quisque blandit adipiscing erat vitae dapibus. Nulla aliquam
                  magna nec elementum tincidunt.
                </p>
              </div>
            )}
          </div>
          <div className="accordion-item">
            <p className="title" onClick={handleClickTitle}>
              Fifth Question
            </p>
            {(id.includes('Fifth') || isShow) && (
              <div className="content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  eu interdum diam. Donec interdum porttitor risus non bibendum.
                  Maecenas sollicitudin eros in quam imperdiet placerat. Cras
                  justo purus, rhoncus nec lobortis ut, iaculis vel ipsum. Donec
                  dignissim arcu nec elit faucibus condimentum. Donec facilisis
                  consectetur enim sit amet varius. Pellentesque justo dui,
                  sodales quis luctus a, iaculis eget mauris. Aliquam dapibus,
                  ante quis fringilla feugiat, mauris risus condimentum massa,
                  at elementum libero quam ac ligula. Pellentesque at rhoncus
                  dolor. Duis porttitor nibh ut lobortis aliquam. Nullam eu
                  dolor venenatis mauris placerat tristique eget id dolor.
                  Quisque blandit adipiscing erat vitae dapibus. Nulla aliquam
                  magna nec elementum tincidunt.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}
