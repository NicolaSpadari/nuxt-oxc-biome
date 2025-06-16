import constants from "@@/constants";

export default defineAppConfig({
    ui: {
        colors: {
            neutral: "zinc"
        },
        accordion: {
            slots: {
                trigger: "cursor-pointer"
            }
        },
        button: {
            slots: {
                base: "cursor-pointer"
            }
        },
        dropdownMenu: {
            slots: {
                item: "cursor-pointer"
            }
        },
        modal: {
            slots: {
                description: "mt-0"
            }
        },
        kbd: {
            base: "hidden lg:inline-flex"
        }
    },
    app: {
        name: constants.name,
        description: constants.description
    }
});
