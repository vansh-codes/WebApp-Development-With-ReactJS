import { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './Calculator.css';

const Calculator = () => {
    // State for managing the current input, previous input, operator, and result
    const [input, setInput] = useState('');
    const [previousInput, setPreviousInput] = useState('');
    const [operator, setOperator] = useState('');
    const [result, setResult] = useState('');

    const handleNumberClick = (value) => {
        setInput((prev) => prev + value);
    };

    const handleOperatorClick = (op) => {
        if (input === '') return;
        setOperator(op);
        setPreviousInput(input);
        setInput('');
    };

    const handleClear = () => {
        setInput('');
        setPreviousInput('');
        setOperator('');
        setResult('');
    };

    const calculate = () => {
        if (!previousInput || !operator || !input) return;
        const num1 = parseFloat(previousInput);
        const num2 = parseFloat(input);
        let res = '';

        switch (operator) {
            case '+':
                res = num1 + num2;
                break;
            case '-':
                res = num1 - num2;
                break;
            case '*':
                res = num1 * num2;
                break;
            case '/':
                res = num2 !== 0 ? num1 / num2 : 'Error';
                break;
            default:
                return;
        }

        setResult(res);
        setInput('');
        setPreviousInput('');
        setOperator('');
    };

    const handleKeyPress = (e) => {
        const key = e.key;

        if (!isNaN(key)) {
            handleNumberClick(key);
        } else if (['+', '-', '*', '/'].includes(key)) {
            handleOperatorClick(key);
        } else if (key === 'Enter' || key === '=') {
            calculate();
        } else if (key === 'Escape') {
            handleClear();
        } else if(key === 'Backspace') {
            setInput((prev) => prev.slice(0, -1));
        }
    };

    useEffect(() => {
        window.addEventListener('keydown', handleKeyPress);

        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [input, previousInput, operator]);

    return (
        <Container fluid="md" className="calculator-container">
            <h1 className="text-center mb-4">Mera Pyaara Calculator</h1>
            <Row className="mb-3">
                <Col>
                    <div className="display bg-light p-3 text-right rounded">
                        {result || input || '0'}
                    </div>
                </Col>
            </Row>

            {/* Button Rows */}
            <Row className="g-3 mb-2">
                <Col sm={3}>
                    <Button variant="primary" className="w-100" onClick={() => handleNumberClick('1')}>
                        1
                    </Button>
                </Col>
                <Col sm={3}>
                    <Button variant="primary" className="w-100" onClick={() => handleNumberClick('2')}>
                        2
                    </Button>
                </Col>
                <Col sm={3}>
                    <Button variant="primary" className="w-100" onClick={() => handleNumberClick('3')}>
                        3
                    </Button>
                </Col>
                <Col sm={3}>
                    <Button variant="warning" className="w-100" onClick={() => handleOperatorClick('+')}>
                        +
                    </Button>
                </Col>
            </Row>

            <Row className="g-3 mb-2">
                <Col sm={3}>
                    <Button variant="primary" className="w-100" onClick={() => handleNumberClick('4')}>
                        4
                    </Button>
                </Col>
                <Col sm={3}>
                    <Button variant="primary" className="w-100" onClick={() => handleNumberClick('5')}>
                        5
                    </Button>
                </Col>
                <Col sm={3}>
                    <Button variant="primary" className="w-100" onClick={() => handleNumberClick('6')}>
                        6
                    </Button>
                </Col>
                <Col sm={3}>
                    <Button variant="warning" className="w-100" onClick={() => handleOperatorClick('-')}>
                        -
                    </Button>
                </Col>
            </Row>

            <Row className="g-3 mb-2">
                <Col sm={3}>
                    <Button variant="primary" className="w-100" onClick={() => handleNumberClick('7')}>
                        7
                    </Button>
                </Col>
                <Col sm={3}>
                    <Button variant="primary" className="w-100" onClick={() => handleNumberClick('8')}>
                        8
                    </Button>
                </Col>
                <Col sm={3}>
                    <Button variant="primary" className="w-100" onClick={() => handleNumberClick('9')}>
                        9
                    </Button>
                </Col>
                <Col sm={3}>
                    <Button variant="warning" className="w-100" onClick={() => handleOperatorClick('*')}>
                        *
                    </Button>
                </Col>
            </Row>

            <Row className="g-3">
                <Col sm={3}>
                    <Button variant="secondary" className="w-100" onClick={() => handleNumberClick('0')}>
                        0
                    </Button>
                </Col>
                <Col sm={3}>
                    <Button variant="warning" className="w-100" onClick={() => handleOperatorClick('/')}>
                        /
                    </Button>
                </Col>
                <Col sm={3}>
                    <Button variant="success" className="w-100" onClick={calculate}>
                        =
                    </Button>
                </Col>
                <Col sm={3}>
                    <Button variant="danger" className="w-100" onClick={handleClear}>
                        C
                    </Button>
                </Col>
            </Row>
        </Container>
    );
};

export default Calculator;