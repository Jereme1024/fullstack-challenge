# Full-stack Engineer Written Challenge

Please answer one or more questions on Section 1 and Section 2, and two or more questions in Section 3. There are no word limits on the answers; you can keep them as concise as possible as long as you have demostrate your thoughts.

You can directly write your answers in your branch following the questions.

## Section 1: Architectural Design

_Please answer at lease one of the following questions._

- Assume that you are building a discussion forum similar with [Hacker News](https://news.ycombinator.com/). The product will be very popular, and your team made the following projection: monthly traffic of 30k page views and 5k posts in the first year, and monthly traffic of 300m page views and 500k posts in the second year. How would you choose your frontend and backend technologies, infrastructures and deploying methods? What methods will you use in scaling your platform and involving the infrastructures?

```
I think scalability and network will be main concerns.
In service, it should be stateless and I will go for auto-scaling container orchestration or serverless lambda.
In DB, I might choose NoSQL friendly to scaling with write / read replicas. Provide a cache (memory db) for popular articles.
In content, we can provide a CDN.
```

- Assume that you are building a backend service for a medical company. When a request come in, this service needs to take the user input, pass it to a pre-trained computational model, and return the output to the user. The service needs to handle a high request frequency with uncertain average traffic volume, and the computational model needs to process large amount of data in parallel. How would you design this service and choose the building blocks to achieve the above requirements?

- Assume that you have an application that is growing very fast. It uses PostgreSQL as data storage, and the growing traffic is making write and read operations slow. What strategies would you take to scale your database horizontally and vertically?

```
There are options:
1. Vertical scale. Cons: hardware bottle neck
2. Separate into read / write db instances. Cons: replication lag
3. Sharding. Cons: need to implement a mapping logic.
4. Separate into multiple databases according to domain. Cons: hard to join
5. Cloud solution with scale e.g. Cloud Spanner of GCP. Cons: migration
```

## Section 2: Distributed Systems and Web3

_Please answer at lease one of the following questions._

- Assume you are to design a product supporting a social network, which allows users to publish articles, comment on articles, and follow other users' articles and comments. You also want this social network to be decentralized and scalable, while enabling other developers to build different tools for the network. What technologies and product would be the essential building blocks, what roles would they play, and how would you combine them together?

- Assume you are to design a product for crowdfunding creative projects with NFTs, where the creator pre-sale the ownership of the final result as NFTs. From minting the tokens to delivering the final result, what are the UX and technological challenges you forsee, and what do you think it takes to solve these problems well?

## Section 3: Personal Passions and Communities

_Please answer at lease two of the following questions._

- What are some technologies you are recently fascinated with, and why are they interesting to you?

```
* React, Next.js, Redux (2020/10). Interested in fullstack.
* GCP Professional Cloud Architect course (2020/11 ~ now). Interested in infrastructure.
```

- What are some open source projects that you are involved with, or enjoy working on? What aspect of the project (e.g. architectural design, scope, community vibe, organization) makes it enjoyable or admirable?

- If you were given the resource and freedom to start and maintain an open source project, what problem do you choose to solve, and how would you setup the community guideline and collaboration process?
