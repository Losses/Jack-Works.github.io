var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { customElement, LitElement, html, property, css } from "https://cdn.pika.dev/lit-element@2.2.1";
function parseURL(href) {
    const url = new URL(href, location.href);
    const data = {
        image: '',
        alt: '',
        href,
    };
    if (href.startsWith(`https://bugzilla.mozilla.org/show_bug.cgi`)) {
        const id = url.searchParams.get('id');
        data.alt = `bugzilla ${id}`;
        data.image = `https://img.shields.io/bugzilla/${id}?style=flat-square`;
    }
    else if (url.hostname.endsWith('github.com') && url.pathname.match(/issues|pull/)) {
        // https://github.com/Agoric/realms-shim/issues/47
        let [, org, repo, type, id] = url.pathname.split('/');
        if (type === 'pull')
            type = 'pulls';
        data.image = `https://img.shields.io/github/${type}/detail/state/${org}/${repo}/${parseInt(id)}?style=flat-square`;
        data.alt = `Github ${type === 'issues' ? 'issue' : 'pull request'} at ${repo} by ${org}`;
    }
    return data;
}
let BadgedLink = class BadgedLink extends LitElement {
    constructor() {
        super(...arguments);
        this.href = '';
    }
    render() {
        const meta = parseURL(this.href);
        if (meta.image === '')
            return html `
                <slot></slot>
            `;
        return html `
            <a target="_blank" href="${meta.href}"><img src="${meta.image}" alt="${meta.alt}"/></a>
            <slot></slot>
        `;
    }
    static get styles() {
        return css `
            img {
                margin-bottom: -5px;
            }
        `;
    }
};
__decorate([
    property(),
    __metadata("design:type", Object)
], BadgedLink.prototype, "href", void 0);
BadgedLink = __decorate([
    customElement('i-a')
], BadgedLink);
export { BadgedLink };
//# sourceMappingURL=badged-link.js.map