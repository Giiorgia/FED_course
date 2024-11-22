const e = React.createElement;

class App extends React.Component{
    constructor(props) {
        super(props)
    }

    render() {
        return e(
            'button',
            {
                className: 'btn btn-info'
            },
            'click me!!'
        )
    }
}

const app = document.getElementById('app');
const root = ReactDOM.createRoot(app);

root.render(e(App))
