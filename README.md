# Graph Generator

This project is a Next.js application that generates Mermaid graphs based on user input using OpenAI's language models. It features real-time graph generation, customizable settings, and a user-friendly interface.

## Features

-   Real-time graph generation using OpenAI's language models
-   Customizable settings for API key, base URL, and model
-   Streaming API responses for instant feedback
-   Mermaid graph visualization
-   Persistent settings using localStorage

## Getting Started

### Prerequisites

-   Node.js (v14 or later)
-   pnpm

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/graph-generator.git
    cd graph-generator
    ```

2. Install dependencies:

    ```bash
    pnpm install
    ```

3. Create a `.env.local` file in the root directory and add your OpenAI API key:

    ```
    OPENAI_API_KEY=your_api_key_here
    ```

4. Start the development server:

    ```bash
    pnpm dev
    ```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Usage

1. **Configure Settings**:

    - Click the settings icon (gear) in the top-right corner.
    - Enter your OpenAI API key.
    - Optionally, set a custom base URL and model.
    - Click "Save" to store your settings.

2. **Generate a Graph**:
    - Enter your text in the main input field.
    - Optionally, provide specific instructions in the instruction field.
    - Click "Generate Graph".
    - The AI suggestions will update in real-time as the response streams in.
    - The Mermaid graph will be displayed on the right side of the screen.

### Example Usage

1.  **Simple Flowchart**:

        - Text: "Create a flowchart for making coffee"
        - Instruction: "Use simple steps and include decision points"
        ```mermaid

    graph TD
    A[Start] --> B[Check if coffee maker is clean]
    B --> C{Is it clean?}
    C -->|Yes| D[Add water to reservoir]
    C -->|No| E[Clean coffee maker]
    E --> D
    D --> F[Place filter in basket]
    F --> G[Add coffee grounds to filter]
    G --> H[Close lid]
    H --> I[Turn on coffee maker]
    I --> J{Is coffee ready?}
    J -->|No| K[Wait]
    K --> J
    J -->|Yes| L[Pour coffee into mug]
    L --> M{Add anything?}
    M -->|No| N[Enjoy your coffee]
    M -->|Yes| O[Add cream/sugar/etc.]
    O --> N
    N --> P[End]

````

2. **Project Dependencies**:

    - Text: "Show the dependencies for a web development project"
    - Instruction: "Include frontend and backend components"
    ```mermaid
graph TD
    A[Web Development Project]
    B[Frontend]
    C[Backend]

    A --> B
    A --> C

    B --> D[HTML]
    B --> E[CSS]
    B --> F[JavaScript]
    B --> G[Frontend Framework]
    G --> G1[React/Vue/Angular]

    C --> H[Server]
    C --> I[Database]
    C --> J[API]

    H --> H1[Node.js/Python/Ruby]
    I --> I1[MySQL/PostgreSQL/MongoDB]
    J --> J1[REST/GraphQL]

    F --> K[npm/Yarn]
    H --> L[Package Manager]
    L --> L1[pip/gem/npm]

    B --> M[Version Control]
    C --> M
    M --> M1[Git]

    B --> N[Build Tools]
    N --> N1[Webpack/Gulp]

    C --> O[ORM]
    O --> O1[Sequelize/Mongoose]

    B --> P[Testing]
    C --> P
    P --> P1[Jest/Mocha]
````

3.  **时间分析**:

    - Text:

    ```text
    韩楚风点上一支烟，说：​“你们之间有的还不认识，我介绍一下。这是我和元英的朋友李志江，志江古玩店经理。这是芮小丹，古城公安局刑警。这位是欧阳雪，古城维纳斯酒店经理，也是即将开业的北京格律诗音响公司董事长，虽然我们没见过面，但是在格律诗公司融资的事上有过合作。这位是正天大厦的马总……”因为韩楚风强调了李志江是丁元英的朋友，芮小丹起身与李志江握握手。其他人则是相互点头一笑，表示礼貌。介绍了在坐的宾客，韩楚风为舒缓大家的陌生感，找了个话题说：​“这家的杂面条是个绝活儿，单锅炝锅，单锅下面，放上当年晒干的红薯叶，全北京就这儿一碗。​”马经理说：​“红薯叶每年只有一季，据老板说为了供应这个餐馆，全村家家户户都晒红薯叶，挑嫩叶子采，淘洗干净，大火烫熟捞出，这才能晾晒。​”李志江笑着说：​“你照这法子开个店试试，准关门。​”马经理说：​“那当然，真秘籍秘法传了，老板锅里汤就少了。​”说话间，大盆烩菜和酒水陆续上桌了。大家倒上酒水，韩楚风端起酒杯说：​“今天机缘巧合大家聚在一起，很高兴。欧阳雪她们刚刚租下了门面房，咱们就为欧阳雪的音响公司早日开业，干一杯！”大家一起举杯，有的是白酒，有的是饮料。韩楚风对肖亚文说：​“欧阳雪他们对北京不熟悉，不管他们请你帮什么忙，有为难的地方言语一声，不定谁能伸把手呢。​”肖亚文笑着说：​“他们就是找个店面、租个仓库，再打听几个正经的代理公司，都是些跑跑腿就能办的事。真有为难的事他们不找我，我也办不了。​”韩楚风问了一句：​“租仓库？店里没库房吗？​”肖亚文说：​“有，真想挤能挤出来两间，店里货物周转足够了。可丁总要的是１５０至２００平方米的库房，特别要求防火、防盗、防潮，那就不是短期周转的普通货物了。​”韩楚风对丁元英的意图了解一些，马上想到那仓库是用于储存音箱的地方。一对音箱的成本可以用两对乐圣旗舰的成本推算，至少也得３０００多元，几百对音箱就是一两百万，确实不是短期周转的普通货物，也确实需要对防火、防盗、防潮有特殊要求。于是韩楚风问：​“你找的仓库在什么地方？​”肖亚文说：​“联系了几家，条件还可以，就是远了点，还没最后定下来。欧阳他们离开业还有段时间，开了业也不一定马上就用仓库，我再多找几家看看。​”韩楚风手一挥说：​“这点事你不用跑了，找马总，交租金就行。​”肖亚文说：​“这个我没想，也不能去。如果用马总的仓库，丁总一个电话就行了，不会从我这儿绕个圈子。丁总既然差我，想必是这点小事不值得惊扰马总。​”马经理说：​“哪里，哪里，谈不上惊扰。​”李志江笑着说：​“我要是元英也不找你，到哪儿花钱都能办的事，干吗落你个人情？​”马经理说：​“这话说的，那就是元英想落亚文个人情了？​”韩楚风说：​“差矣，亚文和小丹的关系根本谈不上人情。​”马经理说：​“那就是元英见外了，回头我打电话批评他。​”然后对肖亚文说：​“正天大厦的负一层和负二层都是仓库区，大部分服务于进场的商户，一部分租给大厦周围有背景关系的商户，虽然租金贵点，可还都打破了头往里挤。正天大厦的仓库不是简单的租房子，而是有专门管理，保安、消防、通风都有保障，就像银行出租的保管箱，不用你派人守着，车辆一脚油门到库房，进出货物特别方便。​”肖亚文说：​“行，这两天我就去正天大厦联系。谢谢马总。​”马经理说：​“千万别提谢，一提我跟元英和韩总都生分了。​”
    ```

    - Instruction:

    ```text

    ```

1.  提取所有实体，实体包括人物，事物，包括明确说明的，也包括隐藏的，比如利益，金钱，如果是一个公司的事情，也可能包括领导 2. 提取所有关系，关系描述了人和人的关系，人和事物的关系。其中一些关系没有明确表明的，则需要进行合理推断，对于推断的关系在表述上带一个问号 3. 做这样的分析和呈现，是为了帮助我了解发生了什么，整个事情的全貌，帮我分析核心矛盾是什么，关键问题是什么。 4. 如果识别处关键的实体，则高亮出来。 5. 如果输入是中文，则输出也为中文。 6. 输出最后，再反思，是否还有更多的实体和关系，提醒我进一步反思。
    ``` - graph

        ```mermaid

    graph TD
    韩楚风[韩楚风] -->|介绍| 李志江[李志江]
    韩楚风 -->|介绍| 芮小丹[芮小丹]
    韩楚风 -->|介绍| 欧阳雪[欧阳雪]
    韩楚风 -->|介绍| 马经理[马经理]
    韩楚风 -->|朋友| 丁元英[丁元英]
    李志江 -->|朋友| 丁元英
    欧阳雪 -->|经理| 古城维纳斯酒店
    欧阳雪 -->|董事长| 格律诗音响公司[格律诗音响公司]
    韩楚风 -->|合作?| 欧阳雪
    芮小丹 -->|刑警| 古城公安局
    马经理 -->|经理| 正天大厦
    肖亚文[肖亚文] -->|协助?| 欧阳雪
    肖亚文 -->|关系| 芮小丹
    丁元英 -->|委托?| 肖亚文
    格律诗音响公司 -->|需要| 仓库[仓库]
    仓库 -->|要求| 防火
    仓库 -->|要求| 防盗
    仓库 -->|要求| 防潮
    正天大厦 -->|提供| 仓库
    音箱[音箱] -->|储存于| 仓库
    格律诗音响公司 -->|即将开业| 北京

        classDef highlight fill:#ff9,stroke:#333,stroke-width:4px;
        class 韩楚风,欧阳雪,丁元英,肖亚文,格律诗音响公司,仓库 highlight;

```

## Customization

You can customize the application by modifying the following files:

-   `app/page.tsx`: Main application layout and logic
-   `components/SettingsForm.tsx`: Settings form component
-   `components/MermaidGraph.tsx`: Mermaid graph rendering component
-   `app/api/generate/route.ts`: API route for graph generation

## Learn More

To learn more about the technologies used in this project, check out the following resources:

-   [Next.js Documentation](https://nextjs.org/docs)
-   [OpenAI API Documentation](https://platform.openai.com/docs/api-reference)
-   [Mermaid Documentation](https://mermaid-js.github.io/mermaid/#/)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.

```

```

```
