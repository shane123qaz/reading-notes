## AWS

86746567

- Access to ec2 meta data in your ec2:

  - curl http://169.254.169.254/latest/meta-data/
  - curl http://169.254.169.254/latest/meta-data/iam/security-credentials/${iam-role-name}

- Concepts

  - EC2
    - AMI 应用程序系统镜像
    - IAM 角色／权限
  - VPC[Virtual Private Cloud]
    - Internat gateways <— Public subnet <—VPC NAT <— Private subnet 
    - Client Network <— VPN <— VPN subnet
  - S3
    - lifecycle
  - ELB
    - ELB —> CloudWatch —> Auto Scaling —> ELB[Add/Del EC2]
    - 分配流量 / 健康检查 / 路由和负载均衡
    - Auto Scaling Group - 跨AZ(Available Zone)平衡
      - 最小规模
      - 所需容量
      - 最大规模
      - Configuration
    - CloudWatch

  - RDS[Relational Database Service]

  - Lambda - 执行指令最长15分钟

