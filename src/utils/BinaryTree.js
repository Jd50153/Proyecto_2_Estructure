class TreeNode {
    constructor(value) {
        this.value = value; // Valor del nodo (en este caso, un partido o equipo)
        this.left = null; // Nodo izquierdo
        this.right = null; // Nodo derecho
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    // Método para insertar un nuevo nodo
    insert(value) {
        const newNode = new TreeNode(value);

        // Si no hay raíz, se crea un nuevo nodo como raíz
        if (!this.root) {
            this.root = newNode;
        } else {
            this._insertNode(this.root, newNode);
        }
    }

    // Método recursivo para insertar el nodo en el lugar adecuado
    _insertNode(node, newNode) {
        // Aquí puedes definir cómo decides insertar en el lado izquierdo o derecho
        // Esto puede depender de la estructura del valor o de algún criterio específico
        if (!node.left) {
            node.left = newNode; // Si no tiene hijo izquierdo, se agrega el nuevo nodo a la izquierda
        } else if (!node.right) {
            node.right = newNode; // Si no tiene hijo derecho, se agrega el nuevo nodo a la derecha
        } else {
            // Si ambos hijos están ocupados, aquí puedes definir lógica adicional o agregar más reglas
            this._insertNode(node.left, newNode); // Ejemplo de agregar al hijo izquierdo si ya están llenos
        }
    }

    // Función para recorrer el árbol en orden
    traverseInOrder(node = this.root, callback) {
        if (node) {
            this.traverseInOrder(node.left, callback);
            callback(node);
            this.traverseInOrder(node.right, callback);
        }
    }
}

export { BinaryTree, TreeNode };
