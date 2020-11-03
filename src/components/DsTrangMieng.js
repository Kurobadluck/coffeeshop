import React, { Component } from 'react';

class DsTrangMieng extends Component {
    render() {
        return (
            <div className="col-md-12 d-flex align-items-center">
                <div className="tab-content ftco-animate" id="v-pills-tabContent">
                    <div className="tab-pane fade show active" id="v-pills-1" role="tabpanel" aria-labelledby="v-pills-1-tab">
                        <div className="row">
                            {this.props.children}
                        </div>
                    </div>
                    <div className="tab-pane fade" id="v-pills-2" role="tabpanel" aria-labelledby="v-pills-2-tab">
                        <div className="row">
                            {this.props.children}
                        </div>
                    </div>
                    <div className="tab-pane fade" id="v-pills-3" role="tabpanel" aria-labelledby="v-pills-3-tab">
                        <div className="row">
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default DsTrangMieng;