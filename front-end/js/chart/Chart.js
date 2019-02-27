import React from 'react';
import { isEmpty } from 'lodash';
import PropTypes from 'prop-types';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/bar';
import 'echarts/lib/chart/pie';
import 'echarts/lib/chart/gauge';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/markPoint';
import 'echarts/lib/component/markLine';
import 'echarts/lib/component/dataZoom';
import 'echarts/lib/component/graphic';
import 'echarts/lib/component/legend';

class Chart extends React.Component {
    static defaultProps = {
        width: '400px',
        height: '200px'
    };

    constructor(props) {
        super(props);

        this.state = { option: props.defaultOption };
    }

    componentDidMount() {
        const { id, clickHandler, hoverHandler } = this.props;
        const { option } = this.state;

        const instance = this.getChartInstance(id);
        instance.setOption(option);

        instance.on('click', (params) => {
            const { seriesName, name, value } = params;

            if (clickHandler) {
                const option = clickHandler({ seriesName, name, value });
                !isEmpty(option) && this.setState({ option });
            }
        });

        instance.on('mouseover', (params) => {
            const { seriesName, name, value } = params;

            if (hoverHandler) {
                const option = hoverHandler({ seriesName, name, value });
                !isEmpty(option) && this.setState({ option });
            }
        });
    }

    componentDidUpdate() {
        const { id } = this.props;
        const { option } = this.state;

        const instance = this.getChartInstance(id);
        instance.setOption(option);
    }

    getChartInstance = (id) => {
        const element = document.getElementById(id);
        let chart = echarts.getInstanceByDom(element);
        if (chart === undefined) {
            chart = echarts.init(element);
        }
        return chart;
    };

    render() {
        const { id, width, height } = this.props;
        return ( <
            div id = { id }
            style = {
                { width, height }
            }
            />
        );
    }
}

Chart.propTypes = {
    id: PropTypes.string.isRequired,
    defaultOption: PropTypes.object.isRequired,
    clickHandler: PropTypes.func,
    hoverHandler: PropTypes.func,
    width: PropTypes.string,
    height: PropTypes.string,
};

export default Chart;