import Sequelize from "sequelize";
import { sequelize } from "../db/dbConnect.js";

const Lendings = sequelize.define('lendings', {
    lending_id: {
      autoIncrement: true,
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    date_out: {
      type: Sequelize.STRING(255),
      allowNull: false
    },
    date_due_back: {
      type: Sequelize.STRING(255),
      allowNull: false
    },
    book_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'books',
        key: 'book_id'
      }
    },
    member_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'members',
        key: 'member_id'
      }
    },
    title: {
      type: Sequelize.STRING(255),
      allowNull: false
    },
    member_name: {
      type: Sequelize.STRING(255),
      allowNull: false
    },
    return_status: {
      type: Sequelize.TINYINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'lendings',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "lending_id" },
        ]
      },
      {
        name: "book_id_idx",
        using: "BTREE",
        fields: [
          { name: "book_id" },
        ]
      },
      {
        name: "memberlendings_idx",
        using: "BTREE",
        fields: [
          { name: "member_id" },
        ]
      },
    ]
  });

export default Lendings