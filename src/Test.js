import * as React from "react";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
class App extends React.Component {
  handleClick() {
    if (this.buttonElement.getAttribute("data-tooltip-id")) {
      this.tooltipInstance.close();
    } else {
      this.tooltipInstance.open(this.buttonElement);
    }
  }
  render() {
    let style = {
      margin: "150px auto 0 auto",
      transform: "translateY(-50%)",
    };
    let margin = {
      margin: "40px",
    };
    return (
      <div id="container">
        <table style={style}>
          <tbody>
            <tr>
              <td>
                <TooltipComponent
                  content="Tooltip from hover"
                  opensOn="Hover"
                  target="#hoverButton"
                >
                  <button
                    style={margin}
                    id="hoverButton"
                    className="e-btn blocks"
                  >
                    Hover Me !(Default)
                  </button>
                </TooltipComponent>
              </td>
              <td>
                <TooltipComponent
                  content="Tooltip from click"
                  opensOn="Click"
                  target="#clickButton"
                >
                  <button
                    style={margin}
                    id="clickButton"
                    className="e-btn blocks"
                  >
                    Click Me !
                  </button>
                </TooltipComponent>
              </td>
            </tr>
            <tr>
              <td>
                <TooltipComponent
                  content="Tooltip from focus"
                  opensOn="Focus"
                  target="#tooltipfocus"
                >
                  <span
                    style={margin}
                    id="textbox"
                    className="e-float-input blocks"
                  >
                    <input
                      id="tooltipfocus"
                      type="text"
                      placeholder="Focus and blur"
                    />
                  </span>
                </TooltipComponent>
              </td>
              <td>
                <TooltipComponent
                  className="wrap"
                  ref={(t) => (this.tooltipInstance = t)}
                  opensOn="custom"
                  content="Tooltip from custom mode"
                >
                  <input
                    id="box"
                    type="button"
                    className="e-btn"
                    ref={(d) => (this.buttonElement = d)}
                    onClick={this.handleClick.bind(this)}
                    value="Click to open tooltip manually"
                  />
                </TooltipComponent>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
export default App;
