/// <reference types="react-scripts" />

declare module "styled-components" {
    export default styled;
}
declare module "styled-components" {
    export { createGlobalStyle, css };
}

declare module "react-hook-form" {
    export { useForm };
}

declare module "react-router-dom" {
    export { BrowserRouter, Switch, Route, Link }
}

declare module 'react' {
    export { useState }
}
declare module '@material-ui/core' {
    export { Button, useStyles }
}