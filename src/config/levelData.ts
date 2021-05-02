interface GraphDataObject {
    startPrice: number;
    maximumChange: number;
    graphLength: number;
    frameDifficultyRange: number[];
    frameStartDirection: number;
    numberOfFramePoints: number;
    noiseLength: number;
    noiseStrength: number;
    noiseScoreRange: number[];
    slumpRatio: number;
}

interface LevelDataObject {
    level: number;
    startMoney: number;
    timeUnit: number;
    GraphData: GraphDataObject;
    itemName: string;
    itemImg: string;
    goalDesc: string;
    goal: number;
}

export const levelData: LevelDataObject[] = [
    {
        level: 1,
        startMoney: 1000,
        timeUnit: 800,
        GraphData: {
            startPrice: 300,
            maximumChange: 50,
            graphLength: 65,
            frameDifficultyRange: [12, 22],
            frameStartDirection: 1,
            numberOfFramePoints: 6,
            noiseLength: 1,
            noiseStrength: 0.25,
            noiseScoreRange: [1.0, 1.5],
            slumpRatio: 0.6,
        },
        itemName: '감자',
        itemImg: 'gamza.png',
        goalDesc: "감자를 팔아서, 1,300원을 만드세요!",
        goal: 1300,
    },
    {
        level: 2,
        startMoney: 1000,
        timeUnit: 650,
        GraphData: {
            startPrice: 500,
            maximumChange: 75,
            graphLength: 80,
            frameDifficultyRange: [3, 7],
            frameStartDirection: -1,
            numberOfFramePoints: 10,
            noiseLength: 1,
            noiseStrength: 0.2,
            noiseScoreRange: [0.6, 1.2],
            slumpRatio: 0.7,
        },
        itemName: '토마토',
        itemImg: 'tomato.png',
        goalDesc: "토마토를 팔아서, 1,500원을 만드세요!",
        goal: 1500,
    },
    {
        level: 3,
        startMoney: 1000,
        timeUnit: 550,
        GraphData: {
            startPrice: 600,
            maximumChange: 100,
            graphLength: 95,
            frameDifficultyRange: [5, 13],
            frameStartDirection: -1,
            numberOfFramePoints: 9,
            noiseLength: 1,
            noiseStrength: 0.3,
            noiseScoreRange: [0.8, 1.5],
            slumpRatio: 0.8,
        },
        itemName: '브로콜리',
        itemImg: 'brocoli.png',
        goalDesc: "브로콜리를 팔아서, 1,800원을 만드세요!",
        goal: 1800,
    },
]