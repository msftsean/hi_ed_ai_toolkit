# 💻 Code Samples

Production-ready examples and reference implementations for AI agents in higher education.

![Status](https://img.shields.io/badge/Status-Published-green)

---

## 🎯 Featured Implementation

### University Front Door Support Agent

**The Problem:** Students contact an average of 4 offices before finding help. First-contact resolution: only 40%.

**The Solution:** Single intelligent entry point using three-agent orchestration pattern.

🔗 **[Full Repository: hiedcab_frontdoor_agent](https://github.com/msftsean/hiedcab_frontdoor_agent)**

#### Key Features
- ✅ Three-agent pattern (Query → Router → Action)
- ✅ Azure AI Stack (Container Apps, AI Search, Cosmos DB)
- ✅ Production-ready architecture
- ✅ Ethical boundaries encoded (crisis escalation)
- ✅ Cost-effective ($160-305/month for pilot deployment)

#### Technology Stack
- **Frontend:** React + Azure Static Web Apps
- **Backend:** FastAPI + Azure Container Apps
- **AI:** GPT-4o + Azure AI Search
- **Data:** Cosmos DB + Key Vault
- **Deployment:** Terraform + GitHub Actions

#### What You'll Learn
- Multi-agent orchestration patterns
- Retrieval-augmented generation (RAG)
- Ethical boundary implementation
- Azure AI Foundry integration
- Production deployment patterns

---

## 🏗️ Architecture Patterns

### Three-Agent Orchestration Pattern

**QueryAgent → RouterAgent → ActionAgent**

This pattern provides:
- Clear separation of concerns
- Testable agent logic
- Auditable decision paths
- Flexible scaling

📂 **[Pattern Documentation](./azure/three-agent-pattern.md)** *(Coming Soon)*

---

## 🔒 Security Hardening

### Safe Agent Deployment

Essential security practices for production agent deployment:

#### 1. Sandboxing
- Isolated environments
- Limited permissions
- Network restrictions
- Resource quotas

#### 2. Credential Management
- Azure Key Vault integration
- Managed identities
- Secrets rotation
- Audit logging

#### 3. Prompt Injection Defense
- Input validation
- Output sanitization
- Context boundaries
- Human-in-the-loop for high-stakes decisions

📂 **[Security Guides](./security/)** *(Coming Soon)*

---

## 🧪 Quick Start Examples

### Example 1: Simple RAG Agent
Minimal retrieval-augmented generation agent using Azure AI Search.

```python
# Coming Soon
```

### Example 2: Ethical Boundaries
How to encode "cannot do" rules in your agent logic.

```python
# Coming Soon
```

### Example 3: Multi-Agent Coordination
Orchestrating multiple agents for complex workflows.

```python
# Coming Soon
```

📂 **[Example Code](./examples/)** *(Coming Soon)*

---

## 📦 Deployment Guides

### Azure AI Foundry
- Container Apps setup
- AI Search configuration
- Cosmos DB provisioning
- GitHub Actions CI/CD

### Local Development
- Docker Compose setup
- Environment configuration
- Testing strategies
- Debugging tips

📂 **[Deployment Guides](./deployment/)** *(Coming Soon)*

---

## 🎓 Learning Path

**For Developers New to AI Agents:**

1. Start with [Front Door Agent](https://github.com/msftsean/hiedcab_frontdoor_agent)
2. Review three-agent pattern documentation
3. Understand ethical boundary implementation
4. Deploy to your own Azure environment
5. Adapt for your use case

**For Experienced AI Developers:**

1. Study multi-agent orchestration patterns
2. Review security hardening guides
3. Explore advanced RAG techniques
4. Contribute your own patterns

---

## 🔗 External Resources

### Microsoft Documentation
- [Azure AI Foundry](https://azure.microsoft.com/ai)
- [Azure Container Apps](https://learn.microsoft.com/azure/container-apps/)
- [Azure AI Search](https://learn.microsoft.com/azure/search/)
- [Cosmos DB](https://learn.microsoft.com/azure/cosmos-db/)

### Community Resources
- [OpenClaw](https://openclaw.ai) - Personal AI assistant (use with caution)
- [Model Context Protocol](https://modelcontextprotocol.io) - MCP specification
- [FastMCP](https://github.com/jlowin/fastmcp) - Python MCP framework

---

## 🤝 Contributing Your Implementations

Have you built something interesting? We'd love to hear about it!

While we're not accepting PRs at this time, we are interested in:
- Success stories from your institution
- Lessons learned from production deployments
- Novel use cases
- Security improvements

📧 Contact: [CONTACT EMAIL]

---

## ⚠️ Important Notes

### Before You Deploy

**Security Checklist:**
- [ ] Review all security hardening guides
- [ ] Configure sandboxed environments
- [ ] Implement proper credential management
- [ ] Set up audit logging
- [ ] Define ethical boundaries for your use case
- [ ] Test crisis escalation paths
- [ ] Get institutional approval

**Compliance Checklist:**
- [ ] Review with Legal/Compliance
- [ ] Assess FERPA implications
- [ ] Document data handling
- [ ] Define retention policies
- [ ] Establish incident response plan

---

## 📊 Reference Architectures

Coming soon:
- Student support agent
- Faculty research assistant
- Administrative workflow automation
- Admissions inquiry handler
- IT helpdesk agent

---

## 🔗 Related Resources

- [Main Toolkit Home](../)
- [Event Materials](../event-materials/)
- [Frameworks](../frameworks/)
- [Case Studies](../case-studies/)

---

*Code samples maintained by Microsoft Higher Education AI Team*
