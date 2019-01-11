import * as React from "react";

export default class TodoTable extends React.Component {
  render() {
    return (
      <div>
        <div>
          <div className="flex-center flex-column">
            <h1 className="animated fadeIn mb-4">Material Design for Bootstrap (Angular)</h1>

            <h5 className="animated fadeIn mb-3">Thank you for using our product. We're glad you're with us.</h5>
            <h6 className="animated fadeIn mb-3">Start browsing <a
              href="https://mdbootstrap.com/docs/angular/">documentation</a>.</h6>

            <p className="animated fadeIn text-muted">MDB Team</p>
          </div>
        </div>

        <TodoTable/>
      </div>
    );
  }
}
