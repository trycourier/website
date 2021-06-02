import { Icon } from "@chakra-ui/react";

const TelnyxIcon = ({whiteFill}: {whiteFill?: boolean}) => (
    <Icon xmlns="http://www.w3.org/2000/svg" width="26" height="23" fill="none" viewBox="0 0 26 23">
        <path fill={whiteFill? "#FFF": "#31B886"} d="M12.953.087L6.985 10.564h11.931L12.953.087zM5.496 14.31l-5.22 8.23h10.441v-8.23h-5.22zM15.19 14.31h5.221l5.216 8.23H15.19v-8.23z"/>
    </Icon>
)

export default TelnyxIcon;