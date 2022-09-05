import { useEnv, useState } from "@odoo/owl";

export default function useStore() {
    const env = useEnv();
    return useState(env.store);
}
