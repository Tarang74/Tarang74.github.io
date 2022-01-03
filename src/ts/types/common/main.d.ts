type NetworkNode = {
        nodes: Array<{
            name: string
        }>,
        links: Array<{
            source: string,
            target: string,
            group: number
        }>
    };

type Unit = [string, Array<Array<string> | string>];
