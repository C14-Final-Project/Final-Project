import * as React from 'react';
import Image from 'react-bootstrap/Image';
function UserAccount(props) {
    return (React.createElement(React.Fragment, null,
        React.createElement("title", null, "User Account"),
        React.createElement("link", { rel: "icon", href: "/favicon.ico" }),
        React.createElement("link", { rel: "noopener noreferer", href: "https://mysite.com/mypage" }),
        React.createElement("nav", { className: "navbar navbar-expand-lg navbar-light bg-light" }),
        React.createElement("div", { className: "container" },
            React.createElement("div", { className: "navbar-brand" },
                React.createElement(Image, { src: "/images/logo.png", alt: "logo", className: "d-flex align-items-center" }),
                React.createElement("span", { className: "navbar-brand-text" }, "Performance User Account")),
            React.createElement("ul", { className: "navbar-nav" },
                React.createElement("li", { className: "nav-item" },
                    React.createElement("a", { className: "nav-link", href: "#" }, "Home")),
                React.createElement("li", { className: "nav-item" },
                    React.createElement("a", { className: "nav-link", href: "#" }, "About")),
                React.createElement("li", { className: "nav-item" },
                    React.createElement("a", { className: "nav-link", href: "#" }, "Contact")))),
        React.createElement("div", { className: "container" },
            React.createElement("div", { className: "d-flex justify-content-center" },
                React.createElement("div", { className: "d-flex align-items-center" },
                    React.createElement("h1", { className: "my-3" }, "Bio"),
                    React.createElement("div", { className: "form-group" },
                        React.createElement("label", { htmlFor: "exampleInput" }, "Example label"),
                        React.createElement("textarea", { className: "form-control", id: "exampleInput" }))),
                React.createElement("div", { className: "d-flex align-items-center" },
                    React.createElement("a", { className: "btn btn-primary", href: "#" }, "Log Out")))),
        React.createElement("footer", { className: "footer" },
            React.createElement("div", { className: "container" },
                React.createElement("p", { className: "text-muted" }, "\u00A9 2021 Performance LLC.")))));
}
export default UserAccount;
