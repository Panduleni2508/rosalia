import React, { useState } from "react";
import { motion } from "framer-motion";
import Confetti from "react-confetti";
import useWindowSize from "react-use/lib/useWindowSize";
import "./App.css";

function App() {
  const [showConfetti, setShowConfetti] = useState(false);
  const [showInvitation, setShowInvitation] = useState(false);
  const [showSadFace, setShowSadFace] = useState(false);
  const { width, height } = useWindowSize();

  const handleYesClick = () => {
    setShowConfetti(true);
    setShowInvitation(true);
    setShowSadFace(false); // Reset "No" reaction

    setTimeout(() => {
      setShowConfetti(false);
      setShowInvitation(false);
    }, 5000); // Hide after 5 seconds
  };

  const handleNoClick = () => {
    setShowSadFace(true);
    setShowConfetti(false);
    setShowInvitation(false);
  };

  return (
    <div className="app-container">
      {/* Custom Confetti when "Yes" is clicked */}
      {showConfetti && (
        <Confetti
          width={width}
          height={height}
          numberOfPieces={300}
          colors={["#ff69b4", "#ff0000", "#ff1493", "#ff4500"]}
        />
      )}

      {/* Animated header */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="header"
      >
        Hey You! ❤️
      </motion.h1>

      {/* Animated message */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1.2 }}
        className="message"
      >
        Spending time with you has truly been a beautiful journey, one that has
        filled my heart with warmth and joy. Every moment shared with you feels
        like a cherished memory I want to hold onto forever. With all my heart,
        I would love to create even more special memories together. Will you be
        my Valentine, and continue this wonderful adventure with me? 💖
      </motion.p>

      {/* Heart animation */}
      <motion.div
        className="heart"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        ❤️
      </motion.div>

      {/* Image and Video Section */}
      <motion.div
        className="media-container"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <img src="/fav-pic.jpeg" alt="Us together" className="media" />
      </motion.div>

      {/* Buttons for Response */}
      <div className="buttons">
        <motion.button
          className="yes-button"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleYesClick}
        >
          Yes! 💕
        </motion.button>

        <motion.button
          className="no-button"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleNoClick}
        >
          No 🙈
        </motion.button>
      </div>

      {/* Custom Message for "Yes" Click */}
      {showInvitation && (
        <motion.div
          className="invitation-message"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          🎉 Yay! You are invited to a special date night! 🌹✨
        </motion.div>
      )}

      {/* Funny Reaction for "No" */}
      {showSadFace && (
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="sad-message"
        >
          😭 Oh no! I guess I'll have to try harder next time... 😢
        </motion.p>
      )}
    </div>
  );
}

export default App;
