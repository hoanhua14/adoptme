const Pet = (props) => {
    return React.createElement('div', {}, [
        React.createElement("h1", {}, props.name),
        React.createElement("h2", {}, props.animal),
        React.createElement("h3", {}, props.breed),

    ]);
}

const App = () => {
    return React.createElement(
        "div",
        {},
        [
            React.createElement("h1", {}, "Adopt Me!"),
            React.createElement(Pet, {
                animal: "Dog",
                name: "Pia",
                breed: "Beijing"
            }),
            React.createElement(Pet, {
                animal: "Dog",
                name: "Lu",
                breed: "Japan"
            }),
            React.createElement(Pet, {
                animal: "Dog",
                name: "Ky",
                breed: "Mixed"
            }),
            React.createElement(Pet, {
                animal: "Cat",
                name: "Kid",
                breed: "Scottish Fold"
            }),

        ])
};

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
