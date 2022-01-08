type NetworkNode = {
        nodes: Array<{
            name: string,
            group?: number
        }>,
        links: Array<{
            source: string,
            target: string,
            group: number
        }>
    };

type Unit = [string, Array<Array<string> | string>];
