
export interface Publication {
  id: number;
  title: string;
  authors: string[];
  venue: string;
  year: number;
  doi?: string;
  tags: string[];
  abstract: string;
}

export const publications: Publication[] = [
  {
    id: 1,
    title: "Efficient Transformers: A Survey of Modality-Specific Optimizations",
    authors: ["Jane Smith", "John Doe", "Alice Johnson"],
    venue: "Neural Information Processing Systems (NeurIPS)",
    year: 2023,
    doi: "10.1234/neurips.2023.1234",
    tags: ["Transformers", "Efficiency", "Survey"],
    abstract: "This comprehensive survey examines recent advancements in optimizing transformer models for different modalities, focusing on architectural improvements, training strategies, and inference optimizations that reduce computational requirements while maintaining performance."
  },
  {
    id: 2,
    title: "EthicalAI: A Framework for Evaluating Fairness in Deep Learning Systems",
    authors: ["John Doe", "Sarah Williams", "Michael Chen"],
    venue: "International Conference on Machine Learning (ICML)",
    year: 2023,
    doi: "10.1234/icml.2023.5678",
    tags: ["Ethics", "Fairness", "Evaluation Framework"],
    abstract: "We introduce EthicalAI, a comprehensive framework for evaluating and ensuring fairness in deep learning systems across multiple domains, complemented by open-source tools for developers and researchers."
  },
  {
    id: 3,
    title: "BioVision: Advancing Medical Imaging Analysis with Self-Supervised Contrastive Learning",
    authors: ["Alice Johnson", "Robert Brown", "Emily Davis"],
    venue: "IEEE Conference on Computer Vision and Pattern Recognition (CVPR)",
    year: 2022,
    doi: "10.1109/cvpr.2022.9879",
    tags: ["Computer Vision", "Medical Imaging", "Self-Supervised Learning"],
    abstract: "This paper presents a novel approach to medical image analysis using self-supervised contrastive learning, demonstrating state-of-the-art performance on multiple benchmark datasets with limited labeled data."
  },
  {
    id: 4,
    title: "NeuralODE for Irregular Time Series: A Comparative Study",
    authors: ["Michael Chen", "Jane Smith", "David Wilson"],
    venue: "Journal of Machine Learning Research (JMLR)",
    year: 2022,
    doi: "10.5555/jmlr.2022.23.4567",
    tags: ["Neural ODE", "Time Series", "Irregular Data"],
    abstract: "We provide a comprehensive evaluation of Neural Ordinary Differential Equation (ODE) models for handling irregular time series data across multiple domains, with emphasis on healthcare applications and financial forecasting."
  },
  {
    id: 5,
    title: "Federated Learning with Differential Privacy Guarantees",
    authors: ["Sarah Williams", "Thomas Anderson", "Lisa Garcia"],
    venue: "ACM Conference on Computer and Communications Security (CCS)",
    year: 2021,
    doi: "10.1145/ccs.2021.8765",
    tags: ["Federated Learning", "Differential Privacy", "Security"],
    abstract: "This work develops novel techniques to provide stronger differential privacy guarantees in federated learning systems without significant performance degradation, enabling privacy-preserving machine learning in sensitive domains."
  },
  {
    id: 6,
    title: "Reinforcement Learning for Robotic Manipulation: A Survey",
    authors: ["David Wilson", "Robert Brown", "Jane Smith"],
    venue: "International Journal of Robotics Research (IJRR)",
    year: 2021,
    doi: "10.1177/ijrr.2021.1234",
    tags: ["Reinforcement Learning", "Robotics", "Manipulation"],
    abstract: "We present a comprehensive survey of reinforcement learning approaches for robotic manipulation tasks, analyzing progress, challenges, and promising research directions in this rapidly evolving field."
  }
];
