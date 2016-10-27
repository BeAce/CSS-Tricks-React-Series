import React from "react";
import _ from "lodash";
import WidgetList from "../views/widget-list";
import * as widgetApi from "../../api/widget-api";

class WidgetListContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state= {
            widgets: []
        };
        this.deleteWidget = this.deleteWidget.bind(this);
    }

    componentDidMount() {
        widgetApi.getWidgets().then(widgets => {
            this.setState({
                widgets: widgets
            })
        });
    }

    deleteWidget(widgetId) {
        widgetApi.deleteWidget(widgetId).then(() => {
            let newWidgets = _.filter(this.state.widgets, widget => widget.id != widgetId);
            this.setState({
                widgets: newWidgets
            })
        });
    }

    render() {
        let widgets = this.state.widgets;
        return (
            <WidgetList widgets={widgets} deleteWidget={this.deleteWidget}/>
        );
    }
}
export default WidgetListContainer;
