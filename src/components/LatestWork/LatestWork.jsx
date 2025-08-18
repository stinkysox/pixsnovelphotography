import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaInstagram } from "react-icons/fa";
import "./LatestWork.css";
import { image } from "framer-motion/client";
import { Baby } from "lucide-react";

// Animation configurations
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      when: "beforeChildren",
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

const initialCategories = {
  Wedding: [
    {
      imageUrl: "https://i.postimg.cc/2j0dtQHY/DSC04383.jpg",
      category: "Wedding",
    },
    {
      imageUrl: "https://i.postimg.cc/PJJDm6Rs/DSC04618.jpg",
      category: "Wedding",
    },
    {
      imageUrl: "https://i.postimg.cc/vTC4sZgr/SRA07798.jpg",
      category: "Wedding",
    },
    {
      imageUrl: "https://i.postimg.cc/fLrPDGw7/Z62-1201.jpg",
      category: "Wedding",
    },
    {
      imageUrl: "https://i.postimg.cc/2yvNJk4L/DSC04580.jpg",
      category: "Wedding",
    },
    {
      imageUrl: "https://i.postimg.cc/xjmNSzVP/DSC04683.jpg",
      category: "Wedding",
    },
    {
      imageUrl: "https://i.postimg.cc/3wyJCsKZ/DSC04465.jpg",
      category: "Wedding",
    },
    {
      imageUrl: "https://i.postimg.cc/T2QM1kx2/DSC05005.jpg",
      category: "Wedding",
    },
    {
      imageUrl: "https://i.postimg.cc/Kj8Wt2bG/DSC04520.jpg",
      category: "Wedding",
    },
    {
      imageUrl: "https://i.postimg.cc/5NGrQTRJ/SUR09800.jpg",
      category: "Wedding",
    },
    {
      imageUrl: "https://i.postimg.cc/3wjf6RJr/SUR09979.jpg",
      category: "Wedding",
    },
    {
      imageUrl: "https://i.postimg.cc/0jjtb0Gr/SUR09782.jpg",
      category: "Wedding",
    },
    {
      imageUrl: "https://i.postimg.cc/vHpPZ94H/KAR04149.jpg",
      category: "Wedding",
    },
    {
      imageUrl: "https://i.postimg.cc/507gdFcJ/SUR09802.jpg",
      category: "Wedding",
    },
    {
      imageUrl: "https://i.postimg.cc/Hs72Rx6G/SUR05256.jpg",
      category: "Wedding",
    },
    {
      imageUrl: "https://i.postimg.cc/fRnKNNPV/SUR04849.jpg",
      category: "Wedding",
    },
    {
      imageUrl: "https://i.postimg.cc/NGKSGQdD/SUR04887.jpg",
      category: "Wedding",
    },
    {
      imageUrl: "https://i.postimg.cc/Ls7kxFj4/SUR04861.jpg",
      category: "Wedding",
    },
    {
      imageUrl: "https://i.postimg.cc/Hn3VPbF0/AKP09108.jpg",
      category: "Wedding",
    },
    {
      imageUrl: "https://i.postimg.cc/br6wRp23/ARJ05827.jpg",
      category: "Wedding",
    },
    {
      imageUrl: "https://i.postimg.cc/yxDwwHbf/ARJ05883.jpg",
      category: "Wedding",
    },
    {
      imageUrl: "https://i.postimg.cc/Hs7qzT5n/ARJ05760.jpg",
      category: "Wedding",
    },
    {
      imageUrl: "https://i.postimg.cc/T1j483cJ/SRA07798.jpg",
      category: "Wedding",
    },
    {
      imageUrl: "https://i.postimg.cc/43rLm9L1/SRA07888.jpg",
      category: "Wedding",
    },
    {
      imageUrl: "https://i.postimg.cc/1XTfQy54/SR401257.jpg",
      category: "Wedding",
    },
  ],

  Engagement: [
    {
      imageUrl: "https://i.postimg.cc/d1SZ62Cb/DSC00207.jpg",
      category: "Engagement",
    },
    {
      imageUrl: "https://i.postimg.cc/vHn3NzzL/DSC09834.jpg",
      category: "Engagement",
    },
    {
      imageUrl: "https://i.postimg.cc/LXc2mDZB/KAR05333.jpg",
      category: "Engagement",
    },
    {
      imageUrl: "https://i.postimg.cc/cLLyy2bG/KAR05163.jpg",
      category: "Engagement",
    },
    {
      imageUrl: "https://i.postimg.cc/jq4FxvNx/SUR04813.jpg",
      category: "Engagement",
    },
    {
      imageUrl: "https://i.postimg.cc/rFbCMthy/KAR05360.jpg",
      category: "Engagement",
    },
    {
      imageUrl: "https://i.postimg.cc/rwkGDLL7/DSC00149.jpg",
      category: "Engagement",
    },
    {
      imageUrl: "https://i.postimg.cc/RZZFsP1N/DSC09663.jpg",
      category: "Engagement",
    },
    {
      imageUrl: "https://i.postimg.cc/k4XfBPW7/DSC00585.jpg",
      category: "Engagement",
    },
    {
      imageUrl: "https://i.postimg.cc/3rkzB2DY/SUR04999.jpg",
      category: "Engagement",
    },
  ],

  PreWedding: [
    {
      imageUrl: "https://i.postimg.cc/hGf4KH6d/DSC00654.jpg",
      category: "PreWedding",
    },
    {
      imageUrl: "https://i.postimg.cc/BQQrW2d8/DSC01087.jpg",
      category: "PreWedding",
    },
    {
      imageUrl: "https://i.postimg.cc/FKtCKSnV/DSC00582.jpg",
      category: "PreWedding",
    },
    {
      imageUrl: "https://i.postimg.cc/tJVV7scF/DSC00685.jpg",
      category: "PreWedding",
    },
    {
      imageUrl: "https://i.postimg.cc/NFpfsBsR/DSC00775.jpg",
      category: "PreWedding",
    },
    {
      imageUrl: "https://i.postimg.cc/XqWCPjqW/SUR03353.jpg",
      category: "PreWedding",
    },
    {
      imageUrl: "https://i.postimg.cc/GtYVKjNt/SUR03313.jpg",
      category: "PreWedding",
    },
    {
      imageUrl: "https://i.postimg.cc/bNZsySnJ/DSC03285.jpg",
      category: "PreWedding",
    },
    {
      imageUrl: "https://i.postimg.cc/C1tpm5xP/SUR03414.jpg",
      category: "PreWedding",
    },
    {
      imageUrl: "https://i.postimg.cc/44Dm3NQQ/SUR03230.jpg",
      category: "PreWedding",
    },
    {
      imageUrl: "https://i.postimg.cc/Rh9yPtzT/DSC02786.jpg",
      category: "PreWedding",
    },
    {
      imageUrl: "https://i.postimg.cc/xTZg8mFF/SUR03375.jpg",
      category: "PreWedding",
    },
  ],

  Haldi: [
    {
      imageUrl: "https://i.postimg.cc/KzzVMbxZ/Z62-1148.jpg",
      category: "Haldi",
    },
    {
      imageUrl: "https://i.postimg.cc/j5pcvwGS/Z62-1158.jpg",
      category: "Haldi",
    },
    {
      imageUrl: "https://i.postimg.cc/pLWZ0t1z/AKP06658.jpg",
      category: "Haldi",
    },
    {
      imageUrl: "https://i.postimg.cc/fWYfDbGY/AKP07582.jpg",
      category: "Haldi",
    },
    {
      imageUrl: "https://i.postimg.cc/fWYfDbGY/AKP07582.jpg",
      category: "Haldi",
    },
    {
      imageUrl: "https://i.postimg.cc/HnTcpTMt/AKP07767.jpg",
      category: "Haldi",
    },
    {
      imageUrl: "https://i.postimg.cc/QdvFFQ5C/AKP07812.jpg",
      category: "Haldi",
    },
    {
      imageUrl: "https://i.postimg.cc/xjFnj0LT/KAR03070.jpg",
      category: "Haldi",
    },
    {
      imageUrl: "https://i.postimg.cc/NMjvYVMH/AKP06816.jpg",
      category: "Haldi",
    },
    {
      imageUrl: "https://i.postimg.cc/5NCdx8xn/KAR02749.jpg",
      category: "Haldi",
    },
  ],

  Sangeeth: [
    {
      imageUrl: "https://i.postimg.cc/XNF6WwNx/SUR00739.jpg",
      category: "Sangeeth",
    },
    {
      imageUrl: "https://i.postimg.cc/CLsyBSqq/DSC04026.jpg",
      category: "Sangeeth",
    },
    {
      imageUrl: "https://i.postimg.cc/nh3622TV/DSC00370.jpg",
      category: "Sangeeth",
    },
    {
      imageUrl: "https://i.postimg.cc/522rXvJh/SUR04774.jpg",
      category: "Sangeeth",
    },
    {
      imageUrl: "https://i.postimg.cc/prvGR5k1/SUR04821.jpg",
      category: "Sangeeth",
    },
    {
      imageUrl: "https://i.postimg.cc/tC2SGT62/DSC04490.jpg",
      category: "Sangeeth",
    },
    {
      imageUrl: "https://i.postimg.cc/3xNL8TC7/SUR04644.jpg",
      category: "Sangeeth",
    },
    {
      imageUrl: "https://i.postimg.cc/Yqn3yPcP/DSC00283.jpg",
      category: "Sangeeth",
    },
    {
      imageUrl: "https://i.postimg.cc/xdrLwD66/DSC00571.jpg",
      category: "Sangeeth",
    },
  ],

  Maternity: [
    {
      imageUrl: "https://i.postimg.cc/g0DrNfQX/RAJ01100.jpg",
      category: "Maternity",
    },
    {
      imageUrl: "https://i.postimg.cc/632wnnfb/RAJ01105.jpg",
      category: "Maternity",
    },
    {
      imageUrl: "https://i.postimg.cc/65yjwKhK/RAJ01150.jpg",
      category: "Maternity",
    },
  ],

  BabyShoot: [
    {
      imageUrl: "https://i.postimg.cc/bwT9tN84/Z62-3364.jpg",
      category: "Maternity",
    },
    {
      imageUrl: "https://i.postimg.cc/vZ35mqts/Z62-3361.jpg",
      category: "Maternity",
    },
    {
      imageUrl: "https://i.postimg.cc/jqPNfd4v/Z62-3334.jpg",
      category: "Maternity",
    },
    {
      imageUrl: "https://i.postimg.cc/fRT017ng/Z62-3061.jpg",
      category: "Maternity",
    },
    {
      imageUrl: "https://i.postimg.cc/k48VWfKD/RAJ00195.jpg",
      category: "Maternity",
    },
  ],
};

const LatestWork = () => {
  const categoryKeys = Object.keys(initialCategories);
  const [activeCategory, setActiveCategory] = useState(categoryKeys[0] || "");
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="latest-work">
      <h2>Our Latest Work</h2>

      <div className="category-buttons">
        {categoryKeys.map((category) => (
          <button
            key={category}
            className={category === activeCategory ? "active" : ""}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          className="image-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          key={activeCategory}
        >
          {initialCategories[activeCategory] &&
          initialCategories[activeCategory].length > 0 ? (
            initialCategories[activeCategory].map((imageObj, index) => (
              <motion.div
                key={`${activeCategory}-${index}`}
                variants={itemVariants}
                style={{ overflow: "hidden" }}
              >
                <img
                  src={imageObj.imageUrl}
                  alt={`${activeCategory} photo ${index + 1}`}
                  className="gallery-img"
                  onClick={() => setSelectedImage(imageObj.imageUrl)}
                />
              </motion.div>
            ))
          ) : (
            <motion.div
              className="empty-images"
              key="empty"
              variants={itemVariants}
            >
              <p className="no-images">No images available in this category.</p>
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="modal"
            onClick={() => setSelectedImage(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.img
              src={selectedImage}
              alt="Enlarged view"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
              className="modal-image"
            />
            <button
              className="modal-close-btn"
              onClick={() => setSelectedImage(null)}
            >
              Close
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="instagram-icon">
        <a
          href="https://www.instagram.com/pramod.photogrphy/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram size={30} />
        </a>
      </div>
    </div>
  );
};

export default LatestWork;
