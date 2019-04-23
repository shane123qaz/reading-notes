# DevOps
## Infrastructure as Code
- Terraform
- AWS CloudFormation
- Azure Resource Manager 
- Google Cloud Deployment Manager
- Chef
- Puppet
- Saltstack
- Ansible
- Docker

## Pipeline as Code
- the Jenkins domain-specific language (DSL).

## Strategy
### Blue/Green Deployments
### A/B Test
### Canary Release
- Istio

## [The 12-Factor App](https://12factor.net/)
- Codebase
- Dependencies
- Config
- Backing services
- Build, release, run
- Processes
- Port binding
- Concurrency
- Disposability
- Dev/prod parity
- Logs
- Admin processes

## Phoenix Server
每次部署的服务器都是通过脚本创建，用来解决环境变化问题

## ELK(Elasticsearch, Logstash, and Kibana)
### Elasticseach
Elasticsearch 是一个实时的分布式搜索分析引擎， 它能让你以一个之前从未有过的速度和规模，去探索你的数据。 它被用作全文检索、结构化搜索、分析以及这三个功能的组合
#### [Elasticseach 权威指南](https://www.elastic.co/guide/cn/elasticsearch/guide/current/_how_to_read_this_book.html)
- 集群内的原理
- 分布式文档存储
- 执行分布式检索
- 分片内部原理
### [Logstash](https://www.elastic.co/guide/en/logstash/current/introduction.html)
Logstash is an open source data collection engine with real-time pipelining capabilities. 
```
`Analysis`
Elasticsearch
Data stores such as MongoDB and Riak

`Archiving`
HDFS
S3

`Monitoring`
Nagios
Ganglia
Zabbix
Graphite
Datadog
CloudWatch

`Alerting`
Watcher with Elasticsearch
Email
Pagerduty
IRC
SNS
```
### [Kibana](https://www.elastic.co/guide/en/kibana/current/introduction.html)
Kibana is an open source analytics and visualization platform designed to work with Elasticsearch. 

## EC2(Amazon Elastic Compute Cloud)
## S3(Amazon Simple Storage Service)
## RDS(Amazon Relational Database Service)
## Lambda
## API Gateway
## SQS
## SNS
## VPC(Amazon Virtual Private Cloud)
## ELB(Elastic Load Balancer)
## CloudWatch
## Route 53
## ELK(Amazon Elasticsearch Service, Amazon Logstash, and Kibana)
## CloudFront

## CDN

![AWS](/Users/xinzhang/Downloads/architecture.png)

## Ansible
- Ansible解决了什么问题? => 自动化配置
    + 自动化：避免运维工作中重复的工作，以及人的不确定性问题
    + 模块化：大部分运维工作能做到模块化，直接使用shell脚本或者python，还是过于低级
    + 标准化：所有的模块的使用方式都是一样的，减少学习成本

- `ansible-doc -l`: 查看模块列表
- `ansible-doc -s`: 查看相关模块参数
- ansible-playbook
```
  在什么机器上以什么身份执行
  hosts
  users
  …
  执行的任务是都有什么
  tasks
  善后的任务都有什么
  handlers
```
```yml
---
- hosts: webservers
  vars:
    http_port: 80
    max_clients: 200
  user: root
  tasks:
  - name: ensure apache is at the latest version
    yum: pkg=httpd state=latest
  - name: write the apache config file
    template: src=/srv/httpd.j2 dest=/etc/httpd.conf
    notify:
    - restart apache
  - name: ensure apache is running
    service: name=httpd state=started
  handlers:
    - name: restart apache
      service: name=httpd state=restarted
```


## Terraform
HashiCorp的Terraform的意义在于，通过同一套规则和命令来操作不同的云平台（包括私有云）
- 编排文件
- 状态文件
- `brew install terraform`
- 当state文件放置在s3
  `terraform init --backend-config="access_key=xxxxxxxxxxxxxxxxxx" --backend-config="secret_key=xxxxxxxxxxxx"`

## Vault
HashiCorp的Vault是一个安全访问Secrets的工具。Secrets是需要严格控制访问权限的任何内容，例如API密钥，密码，证书等。Vault为任何secret提供统一的接口，同时提供严格的访问控制并记录详细的审计日志。
- 安全的Secrets存储
- 动态的Secrets
- 数据加密
- 租赁和续约（Leasing and Renewal）
- 撤销（Revocation）

## Tools

- docker run --rm -t -i -e "AWS_ACCESS_KEY_ID=xxxxxxxxxx" -e "AWS_SECRET_ACCESS_KEY=xxxxxxxxx" -e "AWS_DEFAULT_REGION=xxxxxxxxx"  mesosphere/aws-cli  ecr get-login --no-include-email
- crontab
  - operation in mac
    - env EDITOR=nano crontab -e
    - 0 12 * * *  cd ~/my/backup/folder && ./backup.sh
      - min (0 - 59) 
      - hour (0 - 23) 
      - day of month (1 - 31)
      - month (1 - 12)
      - day of week (0 - 6)
  - crontab -l  显示所有的crontab job
  - crontab -e 编辑所有的crontab job

