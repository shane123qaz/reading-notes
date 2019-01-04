# Kubernetes

## Concepts
- Master 主节点，创建作业任务的地方
- Node 节点，在主节点控制下执行被分配的任务
- Pod 由一个或多个容器构成的集合，作为一个整体被部署到一个单一节点
- Replication controller 控制一个prod在集群运行的实例数量
- Service 将服务内容和具体的prod分离。Kubernetes服务代理负责自动将服务请求分发到正确的prod，不管prod移动到集群中什么位置，甚至可以被替换
- Kubelet 守护进程运行在各个工作节点上，负责获取容器列表，保证容器正常启动和运行
- Kubectl 命令行配置工具    