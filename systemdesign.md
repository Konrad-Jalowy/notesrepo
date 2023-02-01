## System Design Notes

### Definitions
- **Forward Proxy/Proxy** - proxy (middleman in communication) - acting on behalf of the client
- **Reverse Proxy** - proxy acting on behalf of the server
- **Latency** - how much time it takes to execute an operation
- **Throughput** - how many operations you can make per time unit
- **Nines** - what availability you get
- **High Availability** - I believe 5 nines or more (5 nines - 99.999% uptime - 5.17 minutes of downtime per year)
- **SLA** - Service Level Agreement
- **SLO** - Service Level Objective (part of SLA)

### Performance
- **System performance Objectives:**
    - **Minimize Request-Response Latency**
    - **Maximize Throughput**

### Tech Stack
- **Apache Webserver** - not very good as reverse proxy
- **Nginx** - good and often used as reverse proxy
- **Apache Technologies** - PHP, Python, Perl, no JSP/Servlets
- **Apache architecture** - based on Request-Response model, client gets persistent conncetion that gets a thread from a threadpool. For static pages, thread can access disk and provide them. For dynamic pages, thread does processing (CPU, Memory, accessing network 
or some service if necessary) and provides content for the client.
- **Apache webeserver disk requirements** - As a general rule, each page fetched requires around 10k of disk overall (for the page cache, its text, the index, db entries, etc.). 
- **Nginx webserver** - based on Event-Driven Async IO Model, all conections have the same thread, that does not leave CPU (which is great for its speed) and if necessary, this thread makes Asynchronous IO Requests
- **Nginx and Apache** - you can combine nginx and apache. Nginx as reverse proxy (load balancer and cache) for apache web servers between them and the client and nginx as reverse proxy (load balancing and cache) between apache web servers and some backend rest api apache accesses.